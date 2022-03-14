const PageTitle = {
    title : '',
    constructor : function(title){
        this.title = `<h1 id="page_title">` + title + `</h1>`;
    },
    get getContent(){
        return ``;
    },
    get getTitle(){
        return this.title;
    }
}
module.exports = {
    PageTitle
};