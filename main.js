
const { app, BrowserWindow, webContents } = require('electron')
const path = require('path')

function createWindow() {
	const window = new BrowserWindow({
		width: 1024,
		height: 768,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	window.loadFile('index.html')
	console.log(window.webContents.getPrinters())

	window.webContents.print()
}

app.whenReady().then(() => {
	createWindow()



	app.on('active', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
			
		}
	})
})

app.on('window-all-closed', () => {
	if (process.plataform !== 'darwin') {
		app.quit()
	}
})
