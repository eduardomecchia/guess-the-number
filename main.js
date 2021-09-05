const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path');
const url = require('url');

require('@electron/remote/main').initialize();

if (handleSquirrelEvent(app)) {
  // Squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

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

  // Set the application's taskbar icon+
  window.setIcon(path.join(__dirname, 'assets/images/dice.ico'));

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

function handleSquirrelEvent(application) {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function (command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true
      });
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function (args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(application.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      application.quit();
      return true;
  }
}