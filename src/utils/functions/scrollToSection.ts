export function scrollToSection(id: string): void {
	const el: HTMLElement = document.getElementById(id) as HTMLElement
	const scrollHeight = el.offsetTop
	window.scrollTo({top: scrollHeight, behavior: 'smooth'})
	history.pushState(null, 'null', `#${id}`)
}
