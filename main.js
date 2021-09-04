const { app, BrowserWindow } = require('electron');

// Load index.html
function createWindow() {
    const window = new BrowserWindow({
      width: 800,
      height: 600
    });
  
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