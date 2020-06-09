const remoteURL = "http://localhost:5002"

export default {
    getAllMessages() {
        return fetch(`${remoteURL}/messages`).then((result) => result.json())
    },
    getMessage(id) {
        return fetch(`${remoteURL}/messages/${id}`).then((result) => result.json())
    },
    deleteMessages(id) {
        return fetch(`${remoteURL}/messages/${id}`, {
            method: "DELETE"
        }).then((result) => result.json())
    },
    postMessage(newMessage) {
        return fetch(`${remoteURL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMessage),
        }).then((data) => data.json())
    }
}