let slider = 1;
const banner = document.querySelector(".banner");
const bulltes = document.querySelector('.bullets');

function navigateToPage(id) {
    let m = - 100 * id;
    banner.style.marginLeft = m + "%";
    slider += slider === 2 ? -2 : 1;
}

bulltes.addEventListener('click', (e) => {
    let index = e.target.id;
    if (index) {
        slider = Number.parseInt(index);
        navigateToPage(slider);
    }
})

setInterval(() => navigateToPage(slider), 5000)

//menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open-menu');

}