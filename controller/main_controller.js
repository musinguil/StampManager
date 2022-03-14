const MainController = {
    constructor : function(tab){
        mainpage_view = require('../view/js/mainpage_view.js');
        searchbar_view = require('../view/js/searchbar_view');
        pagetitle_view = require('../view/js/pagetitle_view');

        if(tab == 'main'){
            content = mainpage_view.MainPage.constructor(searchbar_view.Searchbar.getSearchbar, 'none');
        }
        else if(tab == 'settings'){
            title = pagetitle_view.PageTitle.constructor('settings')
            content = mainpage_view.MainPage.constructor(title.PageTitle, 'none');
        }
        else{
                console.log('Error occuring while calling type of tab.');
        }
    }
}

module.exports = {
    MainController
};
