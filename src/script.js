import { handleDisplay } from './utils.js';
import { handleForm } from './form.js';
import { ME_URL } from './api/urls.js';
import { fetchData } from './api/requests.js';
observerFunction();
document.addEventListener('DOMContentLoaded', () => {
	if (document.cookie.includes('token')) {
		document.body.classList.remove('overflow');
		handleDisplay('.modal', 'hidden-modal');
		displayProfileText();
	} else {
		handleForm('login'); //removed function parameter
	}
});
async function displayProfileText() {
	const user = await fetchData(ME_URL);
	const profile = document.querySelector('.profile__text');
	profile.querySelector(
		'a'
	).textContent = `${user[0].name} ${user[0].lastname}`;
	profile.querySelector('p').textContent = user[0].name;
}
function observerFunction() {
	const body = document.querySelector('body');
	let observer = new MutationObserver(() => {
		const modalEl = document.querySelector('.modal');
		if (!modalEl) {
			location.reload();
		}
	});
	observer.observe(body, {
		childList: true,
		subtree: true,
	});
}
