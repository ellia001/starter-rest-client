const gorest = "https://gorest.co.in/public/v1/"
const gorestUsers = gorest + "users"

const token = "PASTE TOKEN HER"

function handleGetUsers() {
    console.log("Get Users Called");

    fetch(gorestUsers, {
        "method" : "GET"
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            document.getElementById("getUsersStatusCode").value = response.status
            document.getElementById("getUsersResponseField").value = JSON.stringify(json)
            
        })
    });
}

function handleGetPosts() {
    console.log("Get Posts called, function TODO")
}

function handleCreateUser() {
    userName = document.getElementById("name").value
    email = document.getElementById("email").value
    gender = document.getElementById("gender").value
    status = document.getElementById("status").value

    // Setter opp headers
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token)
    headers.append("Content-Type", "application/json")

    fetch(gorestUsers, {
        "method" : "POST",
        "headers": headers,
        "body": JSON.stringify({
            "name": userName,
            "email": email,
            "gender": gender,
            "status": status
        }) // et javascript-object kan vi gjøre til JSON med json-stringify
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            document.getElementById("createUserStatusCode").value = response.status + " " + response.statusText
            document.getElementById("createUserResponseArea").value = JSON.stringify(json)
        })
    });
}

function handleCreatePost() {
    console.log("Create Post called, function TODO")
}
