export function handleDisplay(tag, toggleClass) {
	const loader = document.querySelector(tag);
	loader.classList.toggle(toggleClass);
}
export function setCookie(token) {
	const now = new Date();
	now.setTime(now.getTime() + 1000 * 60 * 60);
	let expires = 'expires=' + now.toUTCString();
	document.cookie = `token=${token};${expires}`;
}
