const {app, BrowserWindow, ipcMain} = require ('electron')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        //width: 800,
        //height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('index.html')
})

ipcMain.on('get:video.length', (event, path) => {
    mainWindow.webContents.send('get:video.length:return', 'Retour : ' + path)
})