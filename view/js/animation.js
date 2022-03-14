var isPannelClosed = true;
// document.getElementById("clear_logo").setAttribute("style", "display:none;");

function onClickSearcbar(){
    document.getElementById("searchbar").setAttribute('style', 'box-shadow: 1px 1px 1px #463c4c');
}

function onLeaveSearchbar(){
    document.getElementById("searchbar").setAttribute('style', 'box-shadow: none');
}

function onChangeSearchbar(){
    if(document.getElementById("search").value == ''){
        document.getElementById("clear_logo").setAttribute("style", "display:none;");
    }
    else{
        document.getElementById("clear_logo").setAttribute("style", "display:block;");
    }
}

function onClickClearButton(){
    document.getElementById("clear_logo").setAttribute("style", "display:none;");
    document.getElementById("search").value = null;
}

async function openPannel(){
    console.log("Opening hamburger menu.");
    for(var i = -45; i <= 0; i = i + 1){
        document.getElementById("hamburger_menu").style.left = String(i) + "%";
        await sleep(1);
    }
}

async function closePannel(){
    console.log("Closing hamburger menu.");
    for(var i = 0; i >= -45; i = i - 1){
        document.getElementById("hamburger_menu").style.left = String(i) + "%";
        await sleep(1);
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}