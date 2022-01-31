import { LOGIN_URL, REGISTER_URL } from './api/urls.js';
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
	console.log(authData);
	if (!authData.error) {
		handleDisplay('.modal', 'hidden-modal');
		document.body.classList.remove('overflow');
		setCookie(authData.token);
	}
}

function handleForm(id) {
	const form = document.getElementById(id);
	form.addEventListener('submit', handleFormSubmit); //default event

	//handle form inputs and buttons
	document.getElementById('signUp__btn').addEventListener('click', (e) => {
		//add class for hiding or unhiding input elements
		form.querySelector('input[name=name]').classList.toggle(
			'signUp__hidden'
		);
		form.querySelector('input[name=surname]').classList.toggle(
			'signUp__hidden'
		);
		form.querySelector('input[name=email]').classList.toggle(
			'signUp__hidden'
		);
		//change button and paragraph texts, add event listeners
		console.log(e.target.parentNode);
		const state = e.target.innerText;
		let pText;
		if (state === 'Sign up') {
			pText = `Already have an account?`;
			form.addEventListener('submit', handleRegistration);
		} else {
			pText = "Don't have an account?";
			form.addEventListener('submit', handleFormSubmit);
		}
		e.target.innerText = form.querySelector('button').innerText;
		form.querySelector('button').innerText = state;
		form.querySelector('p').innerText = pText;
	});
}
export { handleForm, handleFormSubmit };

//New function to handle registration. It is possible to edit "handleFormSubmit" to avoid this function.
async function handleRegistration(event) {
	event.preventDefault();
	const inputs = event.target.querySelectorAll('input');
	const inputsArray = [...inputs];
	//-----------------------------------------------------------------------
	//validation needed to check if user already exists, but I don't have URL
	//-----------------------------------------------------------------------
	const registrationData = {
		username: inputsArray.find((input) => input.name === 'username').value,
		password: inputsArray.find((input) => input.name === 'password').value,
		name: inputsArray.find((input) => input.name === 'name').value,
		lastname: inputsArray.find((input) => input.name === 'surname').value,
		email: inputsArray.find((input) => input.name === 'email').value,
	};
	const authData = await handleAuthRequest(REGISTER_URL, registrationData);
	console.log(authData);
	if (authData.status !== 'error') {
		alert('User successfully created, please log in.');
		location.reload();
	}
}
