const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });

function getInstallerConfig () {
  console.log('Creating Windows Installer...');
  const rootPath = path.join('./');
  const outPath = path.join(rootPath, 'release-builds');

  return Promise.resolve({
    appDirectory: path.join(outPath, 'guess-the-number-win32-ia32/'),
    authors: 'Eduardo Mecchia',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'guess-the-number.exe',
    setupExe: 'GuessTheNumberInstaller.exe',
    setupIcon: path.join(rootPath, 'assets', 'images', 'dice.ico')
  })
}