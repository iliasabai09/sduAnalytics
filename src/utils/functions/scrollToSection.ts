export function scrollToSection(id): void {
	const el: HTMLElement = document.getElementById(id)
	const scrollHeight = el.offsetTop
	window.scrollTo({top: scrollHeight, behavior: 'smooth'})
	history.pushState(null, null, `#${id}`)
}
