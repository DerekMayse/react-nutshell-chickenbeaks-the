const remoteURL = "http://localhost:5002"

export default{
    get(id){
        return fetch(`${remoteURL}/tasks/${id}`).then(result => result.json())
    },
    getAll(){
        return fetch(`${remoteURL}/tasks?userId=${localStorage.getItem("userId")}`).then(result => result.json())
    },
    patch(id){
        return fetch(`${remoteURL}/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({isCompleted: true}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(result => result.json())
    },
    post(newTask){
        return fetch(`${remoteURL}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        }).then(data => data.json())
    },
    update(editedTask){
        return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTask)
          }).then(data => data.json());
    }
}