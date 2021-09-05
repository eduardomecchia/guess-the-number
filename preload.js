const { BrowserWindow } = require('@electron/remote');
const window = BrowserWindow.getFocusedWindow();

// Add functionality to custom window controls
window.once('ready-to-show', () => {
    const minimize = document.querySelector('#minimize');
    const maximize = document.querySelector('#maximize');
    const close = document.querySelector('#close');
    
    minimize.addEventListener('click', function () {
        window.minimize();
    });
    
    maximize.addEventListener('click', function () {
        window.isMaximized() ? window.unmaximize() : window.maximize();
    });

    close.addEventListener('click', function () {
        window.close();
    });
});