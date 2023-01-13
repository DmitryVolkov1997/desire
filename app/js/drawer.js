export function toggleMenu() {
	const burgerMenu = document.querySelector('.header__burger')
	const sidebar = document.querySelector('.sidebar')
	const sidebarCloseBtn = document.querySelector('.sidebar__close')
	const backdrop = document.querySelector('.backdrop')

	function onClickShowSidebar() {
		if (sidebar.classList.contains('open')) {
			sidebar.classList.remove('open')
			backdrop.classList.remove('open')
		} else {
			sidebar.classList.add('open')
			backdrop.classList.add('open')
		}
	}

	burgerMenu.addEventListener('click', onClickShowSidebar)

	function onClickCloseSidebar() {
		if (sidebar.classList.contains('open')) {
			sidebar.classList.remove('open')
			backdrop.classList.remove('open')
		}
	}

	sidebarCloseBtn.addEventListener('click', onClickCloseSidebar)

	function handleKey(e) {
		if (e.key === 'Escape' && sidebar.classList.contains('open')) {
			sidebar.classList.remove('open')
			backdrop.classList.remove('open')
		}
	}

	window.addEventListener('keydown', handleKey)

	backdrop.addEventListener('click', onClickCloseSidebar)
}

//2:37:07
