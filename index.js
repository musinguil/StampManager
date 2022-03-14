const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')

const creatWindows = () => {
    const win = new BrowserWindow({
        icon: 'view/img/icon/stamp.ico',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win.loadFile('index.html');
    win.webContents.openDevTools();
    win.menuBarVisible = false;
}

app.on('ready', () => {
    creatWindows();
});

app.on('window-all-closed', () => {
    app.quit();
});