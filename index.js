const { app, BrowserWindow } = require('electron');
let win
app.on('ready', function(){
    current_window = new BrowserWindow();
    current_window.loadURL('file://' + __dirname + '/index.html');
    current_window.on('closed', () => {
        current_window = null;
    });
});
app.on('window-all-closed', () => {
    app.quit();
});