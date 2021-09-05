const { app, BrowserWindow } = require('electron');
const path = require('path');
require('@electron/remote/main').initialize();

function createWindow() {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      webPreferences: {
        enableRemoteModule: true,
        preload: path.join(__dirname, 'preload.js')
      }
    });

    // Set the application's taskbar icon
    window.setIcon('./assets/images/dice.ico');
    
    // Load index.html
    window.loadFile('index.html');
}


// Wait until app's ready event before creating window
app.whenReady().then(() => {
    createWindow();

    
    // If there are no windows open when you activate the app, create a window
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

