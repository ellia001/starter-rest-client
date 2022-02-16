const gorest = "https://gorest.co.in/public/v1/"
const gorestUsers = gorest + "users"
const gorestPosts = gorest + "posts"

const token = "7cd81fc1193914281f769003adb822525920d5da8fe7ddb816d4b6a3367d3e69"

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

    fetch(gorestUsers, {
        "method" : "GET"
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            document.getElementById("getPostsStatusCode").value = response.status
            document.getElementById("getPostsResponseField").value = JSON.stringify(json)
            
        })
    });
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
    user = document.getElementById("user").value
    user_id = document.getElementById("user_id").value
    title = document.getElementById("title").value
    body = document.getElementById("body").value

    // Setter opp headers
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token)
    headers.append("Content-Type", "application/json")

    fetch(gorestUsers, {
        "method" : "POST",
        "headers": headers,
        "body": JSON.stringify({
            "user": user,
            "user_id": user_is,
            "title": title,
            "body": body
        }) // et javascript-object kan vi gjøre til JSON med json-stringify
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            document.getElementById("createPostStatusCode").value = response.status + " " + response.statusText
            document.getElementById("createPostResponseArea").value = JSON.stringify(json)
        })
    });
}
