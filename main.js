const { app, BrowserWindow } = require('electron');

function createWindow() {
    const window = new BrowserWindow({
      width: 800,
      height: 600
    });

    // Load index.html
    window.loadFile('index.html');

    // Pick a random number between 0 and 9 (0 and 9 included)
    window.webContents.on('did-finish-load', () => {
        let code = `const feedbackEl = document.querySelector('.feedback');
        let randomNumber = Math.floor(Math.random() * 10);
        feedbackEl.innerHTML = 'Quale numero sto pensando?';`;

        window.webContents.executeJavaScript(code);
    });
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
