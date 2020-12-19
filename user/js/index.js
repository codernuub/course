let hidden = true;
function showMore(){
    const hidden_list = document.querySelector('.hidden-list');
    const showBtn = document.querySelector('.show-more');
    hidden_list.classList.toggle('show-list');
    showBtn.innerText  = hidden? "show less":"show more";
    hidden = !hidden;
}
