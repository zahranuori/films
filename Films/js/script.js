class Movie {
  constructor(IMG, Title, Rating, ReleaseDate, Duration) {
    this.IMG = IMG;
    this.Title = Title;
    this.Rating = Rating;
    this.ReleaseDate = ReleaseDate;
    this.Duration = Duration;
  }
}
let Movies = new Array(8);
let SearchResults = new Array();
const Titles = [
  "Avengers: Endgame",
  "Hobbs & Shaw",
  "John Wick 3",
  "Deadpool 2",
  "The Lion King",
  "Mad Max: Fury Road",
  "Aquaman",
  "Mission Impossible",];
const Ratings = [8.4, 8.8, 8.3, 7.3, 8.1, 7.4, 8.1, 7.8];
const ReleaseDates = [
  "FRI 26 APR",
  "TUE 4 JULY",
  "WED 16 AUG",
  "MON 16 OCT",
  "SUN 8 SEPT",
  "TUE 8 JULY",
  "EWD 16 AUG",
  "MON 16 OCT",];
const Durations = [
  "3HR 1MIN",
  "2HR 45MIN",
  "2HR 36MIN",
  "2HR 15MIN",
  "3HR 1MIN",
  "2HR 45MIN",
  "2HR 36MIN",
  "2HR 15MIN",];
const IMGs = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",];

window.onload = () => {
  let Parent = document.getElementsByClassName("main-container")[0];
  for (let i = 0; i < 8; i++) {
    Movies[i] = new Movie(
      IMGs[i],
      Titles[i],
      Ratings[i],
      ReleaseDates[i],
      Durations[i]
    );
    CreateCard(
      Movies[i].IMG,
      Movies[i].Title,
      Movies[i].Rating,
      Movies[i].ReleaseDate,
      Movies[i].Duration,
      Parent);
  }
};

function CreateCard(Imag, Titl, Ratin, Dat, Duratio, ParentElement) {
  let Container = document.createElement("div");
  Container.classList.add("card");
  Container.innerHTML =
    '<div class="content"><img src="resources/' +
    Imag +
    '" width="100%" height="80%" /><div class="info"><div class="flex-item title">' +
    Titl +
    '</div><div class="rating container"><div class="flex-item rating blue">' +
    Ratin +
    '</div><div class="flex-item rating">/10</div></div><div class="flex-item release-date">Release Date</div><div class="flex-item duration">Duration</div><div class="flex-item date">' +
    Dat +
    '</div><div class="flex-item duration-value">' +
    Duratio +
    "</div></div></div>";
  ParentElement.appendChild(Container);
}
function searchFilm() {
  let Criteria = document.querySelector(".search").value;
  SearchResults = Movies.filter((movie) =>
    movie.Title.toLowerCase().includes(Criteria.toLowerCase())
  );
  let parent = document.getElementsByClassName("main-container")[0];
  parent.innerHTML = "";
  SearchResults.forEach((movie) =>
    CreateCard(
      movie.IMG,
      movie.Title,
      movie.Rating,
      movie.ReleaseDate,
      movie.Duration,
      parent
    )
  );
}
// function Search(element) {
//   const searchTerm = element.value;
//   const filteredCards = cardsInfo.filter(card => {
//     return card.title.includes(searchTerm) || card.description.includes(searchTerm)
//   })
//
//   cardContainer.innerHTML = generateCards(filteredCards)
// }

// function searchFilm() {
//   let input = document.getElementById('searchbar').value
//   input=input.toLowerCase();
//   let x = document.getElementsByClassName('main-container');
//
//   for (let i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display="none";
//     }
//     else {
//       x[i].style.display="list-item";
//     }
//   }
// }