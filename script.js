const searchBox = document.querySelector("#movie-search-box"); //input box
const searchList = document.querySelector("#search-list"); // search suggestions box
const resultGrid = document.querySelector("#result-grid"); // result container from movie page
const BtNSearch = document.querySelector('BTNSEARCH')

// Set default data to localstorage
if (!localStorage.getItem("favMovies")) {
          let favMovies = [];
          localStorage.setItem("favMovies", JSON.stringify(favMovies));
}

//Find movies for the user
const findMovies = () => {
          let searchTerm = searchBox.value.trim(); // Get typed value and remove whitespace

          if (searchTerm.length > 0) {
                    searchList.classList.remove("hide-search-list"); // show the suggestion box
                    fetchMovies(searchTerm); //Load movies from API
          } else {
                    searchList.classList.add("hide-search-list"); // Hide the suggestion box if no character is present in the search box
          }
};

// fetching movies from OMDB API
async function fetchMovies(searchTerm) {
          const URL = `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=755f786c`;

          const res = await fetch(`${URL}`); //Fetching data from server

          const data = await res.json(); //convert data to readable format (JSON)

          /* Returned object is like this :-
	object		{3}	
	    Search		[5]
	        0		{5}
                Title:
                Year:
                imdbID:
                Type:
                Poster:
	        1		{5}
	        2		{5}
	        3		{5}
	        4		{5}
	        5		{5}
        totalResults	:	145
        Response	:	True
    */
          if (data.Response == "True") {
                    displayMoviesList(data.Search);
          }
}

// Displaying matched movies in the suggestions box
const displayMoviesList = (movies) => {
          searchList.innerHTML = ""; //clear the earlier list of movies

          for (let i = 0; i < movies.length; i++) {
                    let movieListItem = document.createElement("div"); // Create a Div
                    movieListItem.dataset.id = movies[i].imdbID; // Set Id to each movie result
                    movieListItem.classList.add("search-list-item"); //Adding 'search-list-item' class to this 'div'

                    //Set poster image address
                    if (movies[i].Poster != "N/A") {
                              moviePoster = movies[i].Poster; // Set image address
                    } else {
                              moviePoster = "notFound.png"; //If image not found then set notFound image
                    }

                    //Add results to suggestions list
                    movieListItem.innerHTML = `
        <div class="search-item-thumbnail"> 
            <img src="${moviePoster}" alt="movie">
        </div>

        <div class="search-item-info">
            <h3>${movies[i].Title}</h3>
             <p>${movies[i].Year}</p>
            
        </div>
        `;

                    searchList.appendChild(movieListItem); //Add a matched movie to autocomplete list
          }

          loadMovieDetails(); //Load movie details
};

//Loading movie details
const loadMovieDetails = () => {
          const searchListMovies =
                    searchList.querySelectorAll(".search-list-item"); //Select all Matched movies

          //Add all matched movies to suggestion box
          searchListMovies.forEach((movie) => {
                    movie.addEventListener("click", async () => {
                              searchList.classList.add("hide-search-list"); //Add CSS
                              searchBox.value = ""; //Reset search box

                              localStorage.setItem("movieID", movie.dataset.id); // Set movie id to localstorage to use it in moviePage.html

                              window.location.href =
                                        "./moviePage/moviePage.html"; //Redirect to a new page
                    });
          });
};

// Adding EventListners to different elements
window.addEventListener("click", function (e) {
          if (e.target.className != "form-control") {
                    searchList.classList.add("hide-search-list"); // Hide suggestions box if user click anywhere other than suggestion box
          }
});

searchBox.addEventListener("keyup", findMovies);
searchBox.addEventListener("click", findMovies);












let inp = document.querySelector(".findMOVIE")
let form = document.querySelector(".searchMOVIE")

async function searchMovies(title, page) {
	let res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=cf71ea0a&page=${page}`)
	let data = await res.json()
	console.log(data.Search)
	return data
}

async function getMovie(id) {
	let res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=cf71ea0a`)
	let data = await res.json()
	console.log(data)
	return data
}

let allMovies = document.querySelector(".all-movies")

searchMovies("Spider-man", 1).then(data => {
	renderData(data.Search)

    
})

function renderData(array) {

    
	allMovies.innerHTML = ""

	array.forEach(element => {
		allMovies.innerHTML += `<div class="movies-item" data-id="${element.imdbID}">
			<img class="movie-Img" src="${element.Poster}" alt="">
            <div class="moreInfBtn">More Info</div>
			<h3 class="nameFILMMMM">${element.Title}</h3>
		</div>`
	});
}

form.addEventListener("submit", (event) => {
	event.preventDefault()

    

	searchMovies(inp.value, 1).then(data => {
		renderData(data.Search)
	})
})


allMovies.addEventListener("click", (event) => {
	let clickedBtn = event.target.closest(".moreInfBtn")

 
	if (clickedBtn) {
		let movieId = clickedBtn.parentElement.dataset.id

		getMovie(movieId)
	}
})



allMovies.addEventListener("click", (event) => {
	let MovieItem = event.target.closest(".movies-item")
    let MovieName = MovieItem.querySelector(".nameFILMMMM").innerHTML
   
   if(MovieItem){
    inp.value =MovieName
   }
})




let Movies = document.querySelector(".movies")

searchMovies("bad", 1).then(data => {
	renderDataa(data.Search)

    
})

function renderDataa(array) {

    
	Movies.innerHTML = ""

	array.forEach(element => {
		Movies.innerHTML += `<div class="movies-item " data-id="${element.imdbID}">
			<img class=" movie-Imgg"  src="${element.Poster}" alt="">
            <div class="moreInfBtn">More Info</div>
			<h3 class="nameFILMMMM">${element.Title}</h3>
		</div>`
	});
}




let Moviess = document.querySelector(".moviess")

searchMovies("serial", 1).then(data => {
	renderDataaa(data.Search)

    
})

function renderDataaa(array) {

    
	Moviess.innerHTML = ""

	array.forEach(element => {
		Moviess.innerHTML += `<div class="movies-item " data-id="${element.imdbID}">
			<img class=" movie-Imgg" src="${element.Poster}" alt="">
            <div class="moreInfBtn">More Info</div>
			<h3 class="nameFILMMMM">${element.Title}</h3>
		</div>`
	});
}



let Moviesss = document.querySelector(".moviesss")

searchMovies("horror", 1).then(data => {
	renderDataaaa(data.Search)

    
})

function renderDataaaa(array) {

    
	Moviesss.innerHTML = ""

	array.forEach(element => {
		Moviesss.innerHTML += `<div class="movies-item " data-id="${element.imdbID}">
			<img class=" movie-Imgg" src="${element.Poster}" alt="">
            <div class="moreInfBtn">More Info</div>
			<h3 class="nameFILMMMM">${element.Title}</h3>
		</div>`
	});
}


let allMoviesAll = document.querySelectorAll(".movi")

allMoviesAll.forEach(item => {
    item.addEventListener('click', function(){
        window.scrollBy({
            top: -1500,
            behavior : "smooth"
          });
    })
});



allMoviesAll.forEach(item => {
    
    item.addEventListener("click", (event) => {
	let MovieItem = event.target.closest(".movies-item")
    let MovieName = MovieItem.querySelector(".nameFILMMMM").innerHTML
   
   if(MovieItem){
    inp.value =MovieName
   }
})


});