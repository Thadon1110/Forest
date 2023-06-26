const menuItems = document.querySelectorAll('.nav__menu a');
const scrollSpySections = document.querySelectorAll('.section');

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 105) {
				sections.push(section);

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);
