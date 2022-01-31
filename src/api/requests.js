import { handleDisplay } from '../utils.js';

export async function handleAuthRequest(url, data) {
	try {
		handleDisplay('.background-loader', 'active-loader');
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const user = await response.json();
		handleDisplay('.background-loader', 'active-loader');
		return user;
	} catch (err) {
		handleDisplay('.background-loader', 'active-loader');
		console.log(err);
	}
}
export async function fetchData(url) {
	try {
		handleDisplay('.background-loader', 'active-loader');
		// console.log(document.cookie.slice(6));
		const response = await fetch(url, {
			headers: {
				token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWYxODUxNjEzNTc4NjU1ZTJlYzQ5ZjYiLCJ1c2VybmFtZSI6InZpZG1hbnRhcyIsImlhdCI6MTY0MzMwNTgxNH0.FwF7dR6BrNbmQYxZ5mbMZ83ZmfRJ7ynz_RbgpD7Ggqw',
			},
		});
		const user = await response.json();
		handleDisplay('.background-loader', 'active-loader');
		return user;
	} catch (err) {
		handleDisplay('.background-loader', 'active-loader');
		console.log(err);
	}
}
