const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStoraged = localStorage.getItem('imageUrl');

console.log(titleInStorage);
console.log(imageUrlStoraged);

if(titleInStorage && imageUrlStoraged) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(189, 110, 45, 0.863), rgba(218, 194, 166, 0.075)), url('${imageUrlStoraged}')`;
}



btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
 localStorage.setItem('title', movieTitleInput);
 localStorage.setItem('imageUrl', posterUrlInput);
 movieTitleToDisplay.textContent = movieTitleInput;
 container.style.backgroundImage = `linear-gradient(rgba(189, 110, 45, 0.863), rgba(218, 194, 166, 0.075)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
});