const btn = document.getElementById('menu-button'); /* Creating our hamburger button*/
const overlay = document.getElementById('overlay');
const navigation = document.getElementById('nav__menu');

btn.addEventListener('click', navToggle); /* When we click the button we want to add a function */
navigation.addEventListener('click', navToggle); /* When we click the button we want to add a function */

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay');
    document.body.classList.toggle('scroll-deactivated');
	navigation.classList.toggle('show-menu');
}