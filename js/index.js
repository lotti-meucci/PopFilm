// Elements.
const mapsTemplate = document.querySelector("#t-maps")
const main = document.querySelector('main')
const nav = document.querySelector('nav')
const menuBtn = document.querySelector('#menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')
const phoneIcons = document.querySelectorAll('.i-phone')
const waIcons = document.querySelectorAll('.i-wa')
const mailIcons = document.querySelectorAll('.i-mail')
const fbIcons = document.querySelectorAll('.i-fb')
const igIcons = document.querySelectorAll('.i-ig')
const langBtns = document.querySelectorAll('.lang-btn')
const navLinks = nav.querySelectorAll('a')

const phone = "3338104818"
localStorage.lang ??= 'it'
document.documentElement.lang = localStorage.lang
addEventListener('resize', closeMenu)
addEventListener('hashchange', closeMenu)
menuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

nav.addEventListener('scroll', () =>
{
	if (nav.scrollTop == 0)
		document.body.classList.remove('menu-scrolled')
	else
		document.body.classList.add('menu-scrolled')
})

tippy('.i-maps',
{
	allowHTML: true,
	content: mapsTemplate.innerHTML,
	theme: 'light-border map',
	animation: 'shift-away',
	interactive: true,
	hideOnClick: false
})

tippy('.i-phone',
{
	allowHTML: true,
	content: '+39 ' + phone,
	theme: 'light-border',
	animation: 'shift-away',
})

for (const btn of langBtns)
{
	btn.addEventListener("click", () =>
	{
		localStorage.lang = btn.getAttribute('data-type')
		document.documentElement.lang = localStorage.lang
	})
}

for (const a of navLinks)
	a.addEventListener('click', () => location.hash = '')

for (const icon of phoneIcons)
	icon.addEventListener('click', () => open('tel:+39' + phone, '_self'))

for (const icon of waIcons)
	icon.addEventListener('click', () => open('https://wa.me/39' + phone, '_self'))

for (const icon of mailIcons)
	icon.addEventListener('click', () => open('mailto:barletti.leonardo@itismeucci.com', '_self'))

for (const icon of fbIcons)
	icon.addEventListener('click', () => open('https://facebook.com', '_self'))

for (const icon of igIcons)
	icon.addEventListener('click', () => open('https://instagram.com', '_self'))

function openMenu()
{
	document.body.classList.add('menu-open')

	setTimeout(() =>
	{
		main.addEventListener('click', closeMenu)
		focus()
	}, 10)
}

function closeMenu()
{
	main.removeEventListener('click', closeMenu)
	document.body.classList.remove('menu-open')
}
