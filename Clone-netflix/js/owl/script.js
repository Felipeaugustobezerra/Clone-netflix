
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
function searchDesktop(){
    const search = document.querySelector('.search-desktop')
document.querySelector('#search-btn-desktop').onclick = function(){
search.classList.toggle('showsearch');
}
}
function refreshPage(){
    const refresh = document.querySelector('.container-desktop')
    document.querySelector('.logo').onclick = function(){
        window.location.reload()
    }
    
}
function refreshPageMobile(){
    const refreshMobile = document.querySelector('.container-mobile')
    document.querySelector('.logo-mobile').onclick = function(){
        window.location.reload()
    }
    
}

showmenu();
search();
searchDesktop();
refreshPage()
refreshPageMobile();
