const { app, BrowserWindow } = require("electron")
const path = require("path")

let win

async function createWindow() {
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: false, // It's important for security reasons
            contextIsolation: true  // Enable contextIsolation for better security
        }
    })

    // Load the Angular app
    if(process.env.APP_ENV == "prod") {
        win.loadFile(path.join(__dirname, "www/index.html"))
    } else {
        await win.loadURL("http://localhost:4200")
        win.webContents.openDevTools()
    }

    win.on("closed", () => {
        win = null
    })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (win === null) {
        createWindow()
    }
})
