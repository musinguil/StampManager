// constructor
function createButton(type_of_button){
    console.log('Creation of ' + type_of_button + ' button...');
    console.log('Trying to read JSON file...');
    try{    
        JSONFile = require('../json/jsonfile.js');
        JSONFile.constructor('../json/view_settings.json');
        modify_icon_path = JSONFile.getInfo().button.modify;
        settings_icon_path = JSONFile.getInfo().button.settings;
        delete_icon_path = JSONFile.getInfo().button.delete;
        adding_icon_path = JSONFile.getInfo().button.add;
        console.log('JSON file readen.')
    }
    catch{
        console.log('Fail to read the JSON file.')
    }
    switch(type_of_button){
        case 'modify':
            modifyButton();
            break;
        case 'delete':
            deleteButton();
            break;
        case 'settings':
            settingsButton();
            break;
        case 'addingButton':
            addingButton();
            break;
        default:
            console.log('Error : Impossible to create button ' + type_of_button);
    }
}
function modifyButton(){
    buttonTemplate(modify_icon_path, 'modifyItem()', true);
}
function settingsButton(){
    return buttonTemplate(settings_icon_path, 'openSettings()', false);
}
function addingButton(){
    return buttonTemplate(adding_icon_path, 'addItem()', true);
}
function deleteButton(){
    return buttonTemplate(delete_icon_path, 'deleteItem()', true);
}
function buttonTemplate(image_path, onclick_function, button_bg){
    body = document.getElementsByTagName('body');
    console.log('Body selected.');
    button = document.createElement('div');
    console.log('Div created.');
    button.setAttribute('onclick', onclick_function);
    console.log('Set attribute onclick as ' + onclick_function)
    image = document.createElement('img');
    image.setAttribute('src', image_path);
    button.appendChild(image);
    if(button_bg == true){
        button.setAttribute('class', 'button_bg, button_icon');
    }
    body.appendChild(button);
    console.log('Button created.');
}

module.exports = {
    createButton,
    modifyButton,
    settingsButton,
    addingButton,
    deleteButton,
    buttonTemplate
}