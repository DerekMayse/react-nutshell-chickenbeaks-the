const remoteURL = 'http://localhost:5002';
const userID = 2;

export default {
	getAll() {
		return fetch(`${remoteURL}/events?userId=${userID}&_sort=date&_order=asc`).then((result) => result.json());
	},
	get(id) {
		return fetch(`${remoteURL}/events/${id}`).then((result) => result.json());
	},
	post(event) {
		return fetch(`${remoteURL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(event)
		}).then((data) => data.json());
	},
	currentUserID: userID,
	delete(id) {
		return fetch(`${remoteURL}/events/${id}`, {
			method: 'DELETE'
		}).then((result) => result.json());
	},
	update(editedEvent) {
		return fetch(`${remoteURL}/events/${editedEvent.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedEvent)
		}).then((data) => data.json());
	}
};
