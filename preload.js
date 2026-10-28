const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("careerAI", {
  refine: (data) => ipcRenderer.invoke("ai-refine-careers", data)
});



