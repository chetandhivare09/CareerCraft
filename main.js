const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
require("dotenv").config();
const OpenAI = require("openai");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setMenuBarVisibility(false);

  win.loadFile("onboarding.html");
}

app.whenReady().then(createWindow);

// ===================== OPENAI CLIENT =====================
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ===================== AI REFINEMENT =====================
ipcMain.handle("ai-refine-careers", async (event, data) => {
  try {
    const prompt = `
### TASK
Refine and expand the given top 5 careers for the Indian market. You may introduce careers not present in the database. Respect user aspiration, interests, and field in that priority order.

### USER PROFILE (JSON INPUT)
${JSON.stringify(data.user, null, 2)}

### MODE = "${data.user.mode}"

### RULE ENGINE TOP 5 (JSON INPUT)
${JSON.stringify(data.topCareers, null, 2)}

### PRIORITY LOGIC
1. aspiration-context → aspiration > interest > field (full pivot allowed)
2. interest-context → interest > field (pivot allowed)
3. base-context → field only (pivot NOT allowed, refine inside domain)

### NON-TRADITIONAL CAREERS
Identity-style roles (gamer, esports player, content creator, musician, streamer, actor, etc.) are valid if monetizable in India.

### REQUIRED OUTPUT
Return **JSON ONLY**, no explanation, no prose, no commentary.

### OUTPUT FORMAT (STRICT JSON)
{
  "careers": [
    {
      "title": "string",
      "match": number,
      "description": "string",
      "salary": "string",
      "growth": "string",
      "recommendedCourses": ["string", ...]
    }
  ]
}

### IMPORTANT
- Output MUST be valid JSON.
- You MUST include the word "json" in your response.
- Always return exactly 5 careers.
`;

    const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: prompt,
  text: { format: { type: "json_object" } }
});


    let raw = null;

// Preferred extraction
if (response.output_text) {
  raw = response.output_text;
}

// Nested fallback extraction
if (!raw && response.output) {
  const block = response.output[0]?.content?.find(c => c.type === "output_text");
  raw = block?.text;
}

if (!raw) {
  console.warn("AI returned no JSON → fallback");
  return { careers: data.topCareers };
}
let ai;
try {
  ai = JSON.parse(raw);
} catch (err) {
  console.warn("Invalid JSON returned → fallback", err);
  return { careers: data.topCareers };
}
return ai;

  } catch (err) {
    console.error("AI Refinement Error:", err);
    return { careers: data.topCareers };
  }
});
