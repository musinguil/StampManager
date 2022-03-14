
const MainPage = {
    header_content : ``,
    content : ``,
    constructor : function(header_content, content){
        this.header_content = header_content;
        this.content = content;
        this.generatePage();
    },

        /*this.searchbar_view = require('./searchbar_view.js');
        this.content = '';

        console.log('Opening MainPage.');

        */

    set setHeaderContent(content){
        this.header_content = content;
    },
    set setContent(content){
        this.content = content;
    },
    generatePage : function(){
        $('body').append(`
        <div id="hamburger_menu" onclick="closePannel()">
            <img class="icon" alt="Leave Hamburger menu" onclick="closePannel()" src="./view/img/icon/cross_dark.svg" />
            <div id="collection_link" class="pointable_item">Collection</div>
            <div id="settings_link" class="pointable_item">Settings</div>
        </div>
        <header>
            <img id="settings" alt="Setting logo" onclick="openPannel()" src="./view/img/icon/menu_dark.svg"/>
            <div id="header_content">` + this.header_content +  `</div>
        </header>
        <section id="content">
        ` + this.content + `
        </section>`);
    }
}
module.exports = {
    MainPage
};