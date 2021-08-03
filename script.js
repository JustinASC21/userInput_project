// reference to submit button
let submitButton = document.querySelector("#submit-button");
// user input
let userName = document.querySelector("#username");
// user pass
let userPass = document.querySelector("#password");
// success and error
let success = document.querySelector("#success");
let error = document.querySelector("#error")
// body
let body = document.querySelector("body");

// when submit button is clicked
submitButton.onclick = function(event) {
    event.preventDefault();

    let username = userName.value;
    let userpassword = userPass.value;
    if ((username == "Baby Yoda") && (userpassword == "Squirtle")) {
        // show the success message
        error.style.display = "none";
        success.style.display = "block";
        body.style.backgroundColor = "lightblue";
    }
    else {
        success.style.display = "none"
        error.style.display = "block";
        body.style.backgroundColor = "rgb(50,50,50)";

    }
    userName.value = "";
    userPass.value = "";
}