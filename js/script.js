var movies = [
  {
    id: 1,
    title: "Moana",
    year: 2016,
    directors: ["Ron Clements, John Musker"],
    bio: "Girl meets a demi god and they save the world",
    length: 113,
    poster: "moana.jpg"
  }, //Moana

  {
    id: 2,
    title: "Finding Dory",
    year: 2016,
    directors: ["Andrew Stanton"],
    bio: "A fish that can talk and is blue",
    length: 100,
    poster: "dory.jpg"
  }, //Finding Dory

  {
    id: 4,
    title: "Maleficent",
    year: 2014,
    directors: ["Robert Stromberg"],
    bio: "A mythical creature",
    length: 97,
    poster: "maleficent.jpg"
  }, //Maleficent

  {
    id: 5,
    title: "Tangled",
    year: 2010,
    directors: ["Bryon Howard, Nathan Greno"],
    bio: "A chic with really long hair",
    length: 100,
    poster: "tangled.jpg"
  }, //Tangled

  {
    id: 6,
    title: "Ratatouille",
    year: 2007,
    directors: ["Brad Bird"],
    bio: "A talking rat that can cook",
    length: 111,
    poster: "rat.jpg"
  }, //Ratatouille

  {
    id: 7,
    title: "The Little Mermaid",
    year: 1989,
    directors: ["Ron Clements, John Musker"],
    bio: "Girl that gives up her voice for a guy",
    length: 85,
    poster: "mermaid.jpg"
  }, //The Little Mermaid

  {
    id: 8,
    title: "Tarzan",
    year: 1999,
    directors: ["Chris Buck, Kevin Lima"],
    bio: "A monkey man",
    length: 88,
    poster: "tarzan.jpg"
  }, //Tarzan

  {
    id: 9,
    title: "Inside Out",
    year: 2015,
    directors: ["Pete Docter"],
    bio: "Bunch of emtions",
    length: 102,
    poster: "inside-out.jpg"
  }, //Inside Out

  {
    id: 10,
    title: "Incredibles 2",
    year: 2018,
    directors: ["Brad Bird"],
    bio: "A family with a psycho baby",
    length: 125,
    poster: "incredibles.jpg"
  } //Incredibles2
]

// console.log(movies);

var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];

// WAY NUMBER ONE:
  // // console.log(movie.title);
  // // document.getElementById('moviesList').innerHTML += "<p>"+ movie.title + "</p>";
  // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML += '</div>';

// WAY NUMBER TWO:
  // var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
  //   movieCard += '<div class="card">';
  //
  //     movieCard += '<div class="card-body">';
  //     movieCard += '<h5 class="card-title">' + movie.title + "</h5>";
  //
  //   movieCard += '</div>';
  // movieCard += '</div>';
  //
  // moviesList.innerHTML += movieCard;

// WAY NUMBER THREE:
  var columns = document.createElement('div');
  var columnsAttr = document.createAttribute('class');
  columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  columns.setAttributeNode(columnsAttr);

  var card = document.createElement('div');
  var cardAttr = document.createAttribute('class');
  cardAttr.value = 'card';
  card.setAttributeNode(cardAttr);

  var cardBody = document.createElement('div');
  var cardBodyAttr = document.createAttribute('class');
  cardBodyAttr.value = 'card';
  cardBody.setAttributeNode(cardBodyAttr);

  var cardTitle = document.createElement('h5');
  var cardTitleAttr = document.createAttribute('class');
  cardTitleAttr.value = 'card-title';
  cardTitle.setAttributeNode(cardTitleAttr);
  var cardTitleText = document.createTextNode(movie.title);

  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  columns.appendChild(card);

  moviesList.appendChild(columns);
}
