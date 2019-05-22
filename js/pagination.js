var movies = [
  {
    id: 1,
    title: "The Little Mermaid",
    year: 1989,
    directors: ["Ron Clements, John Musker"],
    bio: "Ladyfish tries to live on land",
    genre: ["Animation", "Musical", "Family", "Fantasy", "Romance"],
    movieLength: 85,
    poster: "mermaid.jpg"
  }, //The Little Mermaid

  {
    id: 2,
    title: "Tarzan",
    year: 1999,
    directors: ["Chris Buck, Kevin Lima"],
    bio: "A monkey man",
    genre: ["Adventure", "Musical", "Family", "Comedy"],
    movieLength: 88,
    poster: "tarzan.jpeg"
  }, //Tarzan

  {
    id: 3,
    title: "Finding Nemo",
    year: 2003,
    directors: ["Andrew Stanton"],
    bio: "A clown fish that has lost his son",
    genre: ["Animation", "Adventure", "Comedy", "Family"],
    movieLength: 104,
    poster: "dory.jpg"
  }, //Finding Dory

  {
    id: 4,
    title: "Ratatouille",
    year: 2007,
    directors: ["Brad Bird"],
    bio: "A talking rat that can cook",
    genre: ["Animation", "Family", "Fantasy", "Drama", "Coming of age"],
    movieLength: 111,
    poster: "rat.jpg"
  }, //Ratatouille

  {
    id: 5,
    title: "Princess and the Frog",
    year: 2009,
    directors: ["John Musker, Ron Clements"],
    bio: "Her marries well",
    genre: ["Animation", "Family", "Fantasy", "Romance", "Fairy Tale"],
    movieLength: 111,
    poster: "frog.jpg"
  }, //Ratatouille

  {
    id: 6,
    title: "Tangled",
    year: 2010,
    directors: ["Bryon Howard, Nathan Greno"],
    bio: "A chic with really long hair",
    genre: ["Animation", "Musical", "Family", "Fantasy", "Romance"],
    movieLength: 100,
    poster: "tangled.jpg"
  }, //Tangled

  {
    id: 7,
    title: "Maleficent",
    year: 2014,
    directors: ["Robert Stromberg"],
    bio: "A mythical creature",
    genre: ["Action", "Aventure", "Family", "Fantasy", "Romance"],
    movieLength: 97,
    poster: "maleficent.jpg"
  }, //Maleficent

  {
    id: 8,
    title: "Inside Out",
    year: 2015,
    directors: ["Pete Docter"],
    bio: "Bunch of emotions",
    genre: ["Animation", "Adventure", "Family", 'Fantasy', "Drama"],
    movieLength: 102,
    poster: "inside-out.jpg"
  }, //Inside Out

  {
    id: 9,
    title: "Moana",
    year: 2016,
    directors: ["Ron Clements, John Musker"],
    bio: "Young girl ventures with demi-god",
    genre: ["Animation", "Adventure", "Musical", "Family", "Fantasy"],
    movieLength: 113,
    poster: "moana.jpg"
  }, //Moana

  {
    id: 10,
    title: "Incredibles 2",
    year: 2018,
    directors: ["Brad Bird"],
    bio: "A family with a psycho baby",
    genre: ["Animation", "Comedy", "Family", "Superhero", "Science fiction"],
    movieLength: 125,
    poster: "incredibles.jpeg"
  }, //Incredibles2

  {
    id: 11,
    title: "A Wrinkle In Time",
    year: 2018,
    directors: ["Ava DuVernay"],
    bio: "Father disappears and girl goes to find him",
    genre: ["Adventure", "Fantasy", "Family", "Science fiction"],
    movieLength: 110,
    poster: "wrinkle.jpg"
  }, //Wrinkle In Time

  {
    id: 12,
    title: "Christopher Robin",
    year: 2018,
    directors: ["Marc Forster"],
    bio: "The father of the original CR",
    genre: ["Animation", "Comedy", "Family", "Musical"],
    movieLength: 103,
    poster: "robin.jpeg"
  } //Christopher Robin
];

var maxNumberOnScreen = 4;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

if(numberOfPages > 1){
    var pagination = document.getElementById('paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
        pagination.innerHTML += '<li class="page-item"><a class="page-link" onclick="clickOnPageination('+(i+1)+');" href="#">'+(i+1)+'</a></li>';
    }
}

if(maxNumberOnScreen > movies.length){
    // console.log("There are not enough movies in the database to fill the entire screen");
    showMovieThumbnails(0, movies.length);
} else {
    // console.log("there is more movies than the max on screen");
    showMovieThumbnails(0, maxNumberOnScreen);
}

function showMovieThumbnails(start, end){
  // console.log(start);

  document.getElementById('moviesList').innerHTML = '';

  for (var i = start; i < end; i++) {
        var movie = movies[i];

          var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
                movieCard += '<img src="images/posters/'+movie.poster+'" class="card-img-top" alt="">';
                movieCard += '<div class="card-body">';
                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
                movieCard += '</div>';
            movieCard += '</div>';
        movieCard += '</div>';

        document.getElementById('moviesList').innerHTML += movieCard;
    }
}

function clickOnPageination(number) {
  console.log("Button " + number + " clicked");

  var max = number * maxNumberOnScreen;
  var min = max - maxNumberOnScreen;

  if (movies.length < max) {
    max = movies.length;
  }

  showMovieThumbnails(min, max);
}

  function showMoreMovie(movieNumber){
      var singleMovie;
      for (var i = 0; i < movies.length; i++) {

          if(movies[i].id === movieNumber){
              singleMovie = movies[i];
              break;
          }
      }

      document.getElementById('posterImage').src = 'images/posters/' + singleMovie.poster;
      document.getElementById('movieTitle').innerText = singleMovie.title;
      document.getElementById('movieYear').innerText = singleMovie.year;

      document.getElementById('movieDirectors').innerHTML = '';
      for (var i = 0; i < singleMovie.directors.length; i++) {
          document.getElementById('movieDirectors').innerHTML += '<li class="list-inline-item">'+singleMovie.directors[i]+'</li>';
      }

      document.getElementById('movieBio').innerText = singleMovie.bio;
      document.getElementById('movieLength').innerText = singleMovie.movieLength;

      document.getElementById('movieGenre').innerHTML = '';

      document.getElementById('moviePopUp').style.display = 'flex';
      document.body.style.overflow = 'hidden';

      }

      document.getElementById('close').onclick = function(){
        document.getElementById('moviePopUp').style.display = 'none';
        document.body.style.overflow = 'scroll';
      }


      var pageTabs = document.getElementsByClassName('page-tab');
      for (var i = 0; i < pageTabs.length; i++) {
        pageTabs[i].onclick = function(){
        for (var j = 0; j < pageTabs.length; j++) {
            // console.log(pageTabs[j].classList.contains('active'));
            if(pageTabs[j].classList.contains('active')){
                pageTabs[j].classList.remove('active');
                break;
            }
          }
          if (!this.classList.contains('active')){
              this.classList.add('active');
          }
              changeTab(this.innerText);

              // console.log(this.classList);
              // this.classList.add('newClass', 'secondNewClass');
              // console.log(this.classList.contains('active'));
              // console.log(this.classList.item(1));
              // this.classList.remove('active');
              // this.classList.toggle('active');

      }
}

function changeTab(tabName){
  console.log(tabName);
}
