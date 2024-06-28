"use strict";

const textBox = document.getElementById("textBox");
const btn = document.getElementById("btn")



window.onload = function () {
    getAllUsers();
    console.log("it works");
    btn.onclick = onClickedbtn;

}

function onClickedbtn() {
    getAllUsers();
}






// Function to get all users via fetch()
function getAllUsers() {
let body = {
    "text": document.getElementById("textBox").value,
}
    const loginData = getLoginData();
    const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": 
            "application/json; charset = UTF-8",
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts" , options)
        .then(response => response.json())
        .then(posts => {
            console.log(posts)

           
        });
}















