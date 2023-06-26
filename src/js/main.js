const hamBtn = document.querySelector('.nav__hamburgermenu .fa-solid');
const xBtn = document.querySelector('.nav__mobile div');
const navMobile = document.querySelector('.nav__mobile');
const navMobileA = document.querySelectorAll('.nav__mobile a');
const body = document.querySelector('body');
const footerYear = document.querySelector('.footer__copyright-year');

const menuToggle = () => {
	navMobile.classList.toggle('nav__mobile--active');

	if (navMobile.classList.contains('nav__mobile--active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
hamBtn.addEventListener('click', menuToggle);
xBtn.addEventListener('click', menuToggle);
navMobileA.forEach((hrefs) => {
	hrefs.addEventListener('click', menuToggle);
});
