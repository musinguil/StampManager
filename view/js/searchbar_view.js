const Searchbar = {
    content : `
    <div id="searchbar" onmouseleave="onLeaveSearchbar()" onmouseover="onClickSearcbar()">
        <input id="search" placeholder="Search something here..." type="text" oninput="onChangeSearchbar()" />
        <img id="clear_logo" alt="clear_logo" src="./view/img/icon/cross_dark.svg" onclick="onClickClearButton()">
    </div>`,
    get getSearchbar(){
        console.log('Searchbar initialized.')
        return this.content;
    }

}
export default Searchbar;
/*module.exports = {
    Searchbar
};*/