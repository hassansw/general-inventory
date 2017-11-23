const {app,BrowserWindow,Menu} = require('electron');
const url = require('url');
//const Menu = electron.Menu;

let win

const template =[

    {
      label : 'View',
      submenu :[
        { role : 'reload', accelerator : 'CmdOrCtrl+Y'  },
        { type : 'separator'},
        { role : 'togglefullscreen', accelerator : 'CmdOrCtrl+Y'}
      ]
    },
    {
      label : 'Help',
      submenu : [
        {
        label : 'Learn More',
        click(){ app.shell.openExternal('https://google.com')}
      }
      ]
    }

]
function boot(){
  win = new BrowserWindow({width:800,height:600});

  win.loadURL(url.format({
    pathname:'index.html',
    slashes:true

  }));
}
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.on('ready',boot);
