
// WAY NUMBER ONE:
  // // console.log(movie.title);
  // // document.getElementById('moviesList').innerHTML += "<p>"+ movie.title + "</p>";
  // moviesList.innerHTML += '<div class="col-12 col-sm-6 col-md-4">';
  //   moviesList.innerHTML += '<div class="card">';
  //
  //   moviesList.innerHTML += '</div>';
  // moviesList.innerHTML += '</div>';


// WAY NUMBER THREE:
  // var columns = document.createElement('div');
  // var columnsAttr = document.createAttribute('class');
  // columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  // columns.setAttributeNode(columnsAttr);
  //
  // var card = document.createElement('div');
  // var cardAttr = document.createAttribute('class');
  // cardAttr.value = 'card';
  // card.setAttributeNode(cardAttr);
  //
  // var cardBody = document.createElement('div');
  // var cardBodyAttr = document.createAttribute('class');
  // cardBodyAttr.value = 'card';
  // cardBody.setAttributeNode(cardBodyAttr);
  //
  // var cardTitle = document.createElement('h5');
  // var cardTitleAttr = document.createAttribute('class');
  // cardTitleAttr.value = 'card-title';
  // cardTitle.setAttributeNode(cardTitleAttr);
  // var cardTitleText = document.createTextNode(movie.title);
  //
  // cardTitle.appendChild(cardTitleText);
  // cardBody.appendChild(cardTitle);
  // card.appendChild(cardBody);
  // columns.appendChild(card);
  //
  // moviesList.appendChild(columns);


//  -------  -------  -------  -------  -------  -------  -------  -------//

// <div id="moviePopUp" class="overlay">
//     <div class="overlayContent">
//         <div id="close">
//           <i class="far fa-times-circle fa-3x"></i>
//         </div>
//
//         <img src="images/posters/mermaid.jpg" class="rounded float-left" alt="..." style="width: 610px; height: 750px;">
//
//         <div class="movieTitle">
//           <h1>Movie Title</h1>
//         </div>
//
//         <div class="movieYear">
//           <h2>Year</h2>
//         </div>
//
//         <div class="movieDirectors">
//           <h2>Director 1, Director 2, Director 3</h2>
//         </div>
//
//         <div class="movieBio">
//           <h3>Bio about the movie, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
//         </div>
//
//         <div class="movieLength">
//           <h2>Length</h2>
//         </div>
//
//         <div class="badges">
//           <span class="badge badge-primary">Genre</span>
//           <span class="badge badge-secondary">Genre</span>
//           <span class="badge badge-success">Genre</span>
//           <span class="badge badge-danger">Genre</span>
//           <span class="badge badge-warning">Genre</span>
//           <span class="badge badge-info">Genre</span>
//         </div>
//
//
//     </div>
// </div>
