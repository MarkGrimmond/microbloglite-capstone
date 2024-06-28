/* Posts Page JavaScript */

"use strict";

const logoutButton = document.getElementById("logoutButton");
window.onload = () => {
  getPost()
 logoutButton.onclick = () => {
    logout();
 }
}




function getPost () {
    
    const options = { 
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("login-data")).token}`,
        },
       
    };

    fetch(apiBaseURL + "/api/posts", options)
        .then(response => response.json())
        .then(posts => {
            console.log(posts)

            for(let user of posts){
                createCard(user)
            }
        });
}

function createCard(data){
    let colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4", "text-center"); 

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "mt-5");

    let h5cardHeader = document.createElement("h5");
    h5cardHeader.classList.add("card-header");
    h5cardHeader.innerHTML = data.username;
    cardDiv.appendChild(h5cardHeader);
    
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardDiv.appendChild(cardBody);

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = data.text;
    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = data._id;
    cardBody.appendChild(cardText);

    let button = document.createElement("a");
    button.classList.add("btn", "btn-warm"); // the new warm grey class
    button.href = "#";
    button.innerHTML = "Read More";
    cardBody.appendChild(button);

    const crdCreate = document.getElementById("crdCreate");
    colDiv.appendChild(cardDiv);
    crdCreate.appendChild(colDiv);
}






