const { app, BrowserWindow } = require('electron');
const path = require('path')
const url = require('url')

const creatWindows = () => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    win.loadFile('index.html');
    /*win.loadURL(url.format({
        pathname: path.join(__dirname + '/index.html'),
        protocol: 'file:',
        slashes:true
    }));*/
    win.webContents.openDevTools();
    win.menuBarVisible = false;
}

app.on('ready', () => {
    creatWindows();
});

app.on('window-all-closed', () => {
    app.quit();
});