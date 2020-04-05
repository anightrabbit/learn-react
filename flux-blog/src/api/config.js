export const getFakeMembers = count => new Promise((resolve, reject) => {
	const api = `https://api.randomuser.me/?nat=NO&results=${count}`;
	const request = new XMLHttpRequest();
	request.open('GET', api);
	request.onload = () => (request.status === 200) ?
		resolve(JSON.parse(request.response).results) :
		reject(Error(request.statusText));
	request.onerror = err => reject(err);
	request.send();
});