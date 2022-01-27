import { LOGIN_URL } from './api/urls.js';
import { handleAuthRequest } from './api/requests.js';
import { handleDisplay, setCookie } from './utils.js';

async function handleFormSubmit(event) {
	event.preventDefault();
	const inputs = event.target.querySelectorAll('input');
	const inputsArray = [...inputs];
	const loginData = {
		username: inputsArray.find((input) => input.name === 'username').value,
		password: inputsArray.find((input) => input.name === 'password').value,
	};
	const authData = await handleAuthRequest(LOGIN_URL, loginData);
	if (!authData.error) {
		handleDisplay('.modal', 'hidden-modal');
		document.body.classList.remove('overflow');
		setCookie(authData.token);
	}
}
function handleForm(id, func) {
	const form = document.getElementById(id);
	form.addEventListener('submit', func);
}
export { handleForm, handleFormSubmit };
