var movies = [
  {
    id: 1,
    title: "The Little Mermaid",
    year: 1989,
    directors: ["Ron Clements, John Musker"],
    bio: "Ladyfish tries to live on land",
    genre: ["Animation", "Musical", "Family", "Fantasy", "Romance"],
    length: 85,
    poster: "mermaid.jpg"
  }, //The Little Mermaid

  {
    id: 2,
    title: "Tarzan",
    year: 1999,
    directors: ["Chris Buck, Kevin Lima"],
    bio: "A monkey man",
    genre: ["Adventure", "Musical", "Family", "Comedy"],
    length: 88,
    poster: "tarzan.jpeg"
  }, //Tarzan

  {
    id: 3,
    title: "Finding Nemo",
    year: 2003,
    directors: ["Andrew Stanton"],
    bio: "A clown fish that has lost his son",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    length: 104,
    poster: "dory.jpg"
  }, //Finding Dory

  {
    id: 4,
    title: "Ratatouille",
    year: 2007,
    directors: ["Brad Bird"],
    bio: "A talking rat that can cook",
    genre: ["Animation", "Family", "Fantasy", "Drama", "Coming of age"],
    length: 111,
    poster: "rat.jpg"
  }, //Ratatouille

  {
    id: 5,
    title: "Tangled",
    year: 2010,
    directors: ["Bryon Howard, Nathan Greno"],
    bio: "A chic with really long hair",
    genre: ["Animation", "Musical", "Family", "Fantasy", "Romance"],
    length: 100,
    poster: "tangled.jpg"
  }, //Tangled

  {
    id: 6,
    title: "Maleficent",
    year: 2014,
    directors: ["Robert Stromberg"],
    bio: "A mythical creature",
    genre: ["Action", "Aventure", "Family", "Fantasy", "Romance"],
    length: 97,
    poster: "maleficent.jpg"
  }, //Maleficent

  {
    id: 7,
    title: "Inside Out",
    year: 2015,
    directors: ["Pete Docter"],
    bio: "Bunch of emotions",
    genre: ["Animation", "Adventure", "Family", 'Fantasy', "Drama"],
    length: 102,
    poster: "inside-out.jpg"
  }, //Inside Out

  {
    id: 8,
    title: "Moana",
    year: 2016,
    directors: ["Ron Clements, John Musker"],
    bio: "Young girl ventures with demi-god",
    genre: ["Animation", "Adventure", "Musical", "Family", "Fantasy"],
    length: 113,
    poster: "moana.jpg"
  }, //Moana

  {
    id: 9,
    title: "Incredibles 2",
    year: 2018,
    directors: ["Brad Bird"],
    bio: "A family with a psycho baby",
    genre: ["Animation", "Comedy", "Family", "Superhero", "Science fiction"],
    length: 125,
    poster: "incredibles.jpeg"
  } //Incredibles2
]

// console.log(movies);

var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];


// WAY NUMBER TWO:

  var genreClass = '';
  if (movie.genre[0] === 'Animation') {
    genreClass = 'border-primary';

  } else if (movie.genre[0] === 'Adventure'){
    genreClass = 'border-warning';

  } else if (movie.genre[0] === 'Action') {
    genreClass = 'border-danger';

  } else {
    genreClass = 'border-dark';
  }


  var movieCard = '<div class="col-12 col-sm-6 col-md-4 mb-3 text-center">';
    // movieCard += '<div class="movieThumb card '+ genreClass +'" onclick="showMoreMovies()">';
      movieCard += '<div class="movieThumb movieThumb2 card '+ genreClass +' " data-id="' + movie.id +'">';
      movieCard += '<img src="images/posters/' + movie.poster + '"class="card-img-top" alt="">';
      movieCard += '<div class="card-body">';
      movieCard += '<h5 class="card-title">' + movie.title + "</h5>";
      // movieCard += '<h5 class="card-title">' + movie.year + "</h5>";
      // movieCard += '<h5 class="card-title">' + movie.directors + "</h5>";
      // movieCard += '<h5 class="card-title">' + movie.bio + "</h5>";

    movieCard += '</div>';
  movieCard += '</div>';

  moviesList.innerHTML += movieCard;

}


function showMoreMovie(movieNumber){
  var singleMovie;
    // console.log('you have clicked on a movie');
    console.log(movieNumber);

    for (var i = 0; i < movies.length; i++) {

      if(movies[i].id === movieNumber) {
        console.log(movies[i]);
        singleMovie = movies[i];
        break;
      }
    }

    console.log(singleMovie);
    document.getElementById('posterImage').src = 'images/posters/' + singleMovie.poster;
    document.getElementById('movieTitle').innerText = singleMovie.title;





    document.getElementById('moviePopUp').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}






var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
    // console.log(movieThumbnails[i]);
    // console.log(movieThumbnails[i].dataset.id);

    // movieThumbnails[i].onclick = showMoreMovie;

    movieThumbnails[i].onclick = function(){
        var id = parseInt(this.dataset.id);
        showMoreMovie(id);
    };

    // movieThumbnails[i].onclick = function(){
    //     document.getElementById('moviePopUp').style.display = 'flex';
    //     document.body.style.overflow = 'hidden';
    // };
}

document.getElementById('close').onclick = function(){
    document.getElementById('moviePopUp').style.display = 'none';
    document.body.style.overflow = 'scroll';
}
