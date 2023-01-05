const joke = document.getElementById('joke');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
function getjoke(){
   fetch(url)
   .then(data => data.json())
   .then(item => joke.innerHTML = (item.joke));
}
