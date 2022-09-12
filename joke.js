/*
Author Melissa Baker Sept 5, 2022 - WYWM assignment - Javascript 
*/

//variables
const jokeListUrl = "https://v2.jokeapi.dev"
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

//const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
//when the page loads
window.addEventListener("load",updateJokeList);
//retrieve list of all jokes from api
async function getJokeList(){
    return fetch(jokeListUrl).then(response => response.json());
}
//add joke to drop down list?
function updateJokeList(){
    getJokeList().then(function(data){
        //get joke list,type
        for(var element in data.message){
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

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }