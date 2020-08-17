const modules = new Map()
const cards = new Map()
module.exports = {
	cards: cards,
	modules: modules
}

// Responsible for loading Electron & doing stuff there.
const window_height = 400
const window_width = 700

const { app, BrowserWindow, ipcMain } = require('electron')

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
		for (const [id, value] of cards.entries()) {
			win.webContents.send('addCard', { contributor: value.contributor, title: value.name, id: id })
		}
    })
}

app.whenReady().then(createWindow)

ipcMain.on('execute', (event, args) => {
	cards.get(args.id).exec(event, args, modules, cards)
})
