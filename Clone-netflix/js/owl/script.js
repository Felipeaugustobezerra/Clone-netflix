
function showmenu(){
const menu = document.querySelector('.nav-mobile')
document.querySelector('.menu').onclick = function(){
menu.classList.toggle('showmenu');
}
}
function search(){
    const search = document.querySelector('.search')
document.querySelector('#search-btn').onclick = function(){
search.classList.toggle('showsearch');
}
}

showmenu();
search();