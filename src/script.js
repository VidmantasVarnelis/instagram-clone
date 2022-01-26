import { LOGIN_URL } from './api/urls.js';
import { handleAuthRequest } from './api/requests.js';
document.addEventListener('DOMContentLoaded', () => {
	handleForm('login', handleFormSubmit);
});

async function handleFormSubmit(event) {
	event.preventDefault();
	const inputs = event.target.querySelectorAll('input');
	const inputsArray = [...inputs];
	const obj = {
		username: inputsArray.find((input) => input.name === 'username').value,
		password: inputsArray.find((input) => input.name === 'password').value,
	};
	const data = await handleAuthRequest(LOGIN_URL, obj);
	console.log(data);
}
function handleForm(id, func) {
	const form = document.getElementById(id);
	form.addEventListener('submit', func);
}
