// Responsible for loading Electron & doing stuff there.

const window_height = 400
const window_width = 700

const { app, BrowserWindow, ipcMain } = require('electron')

let funcs = []
let listOfThings = []

function createWindow () {
    const win = new BrowserWindow({
        width: window_width,
        height: window_height,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/index.html')
    win.setMenu(null)
    win.setResizable(false)


    win.webContents.on('did-finish-load', () => {
        for(let i = 0; i < listOfThings.length; i++){
            const thing = listOfThings[i]
            win.webContents.send('addCard', { contributor: thing.value.contributor, title: thing.value.title, id: i.toString()})
        }
    })
}

app.whenReady().then(createWindow)

ipcMain.on('execute', (event, arg) => {
    funcs[arg.id]()
})

module.exports = {
    processListOfThings: function(_listOfThings){
        listOfThings = _listOfThings
        for(let i = 0; i < _listOfThings.length; i++) {
            const thing = _listOfThings[i]
            funcs[i] = thing.key
        }
    }
}
