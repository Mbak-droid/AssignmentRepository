/*
Author Melissa Baker Spet 5, 2022 - WYWM assignment - Javascript 
*/

//variables
const jokeListUrl = "https://v2.jokeapi.dev/joke/Any"
const jokeList = document.getElementById("joke-list")
//when the page loads
window.addEventListener("load", function/method)
//retrieve list of all jokes from api
async function getJokeList(){
    return fetch(jokeListUrl).then(Response => Response.json());
}
//add joke to drop down list?
function updateJokeList(){
    getJokeList().then(function(data){
        //get joke list,type
        for(element in data.message){
        //append to select list
        let option = createOption(element);
        jokeList.appendChild(option);

        }
        
      }
    );
}

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
}

