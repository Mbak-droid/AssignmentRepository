/*
Author Melissa Baker Sept 5, 2022 - WYWM assignment - Javascript 
*/

//variables

const GetJokeButton = document.getElementById('GetJoke'); //element button
const JokeText = document.getElementById('joke'); //element div



//when the page loads
GetJokeButton.addEventListener("click",retrieveJoke); //click then function called

retrieveJoke();


//retrieve  joke from api
async function retrieveJoke() {
    const returnJoke = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode', {
       headers: {
           'Accept':'application/json'
       }
    });
  
    const newjoke = await returnJoke.json(); //new object

    console.log(newjoke);

    JokeText.innerHTML = newjoke.joke;

}




