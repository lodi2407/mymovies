import React from 'react';
import './App.css';

// import images
import movies from "./pictures/movies.png";
import favorites from "./pictures/favorites.png";
import theSilence from "./pictures/theSilence.jpg";
import les3freres from "./pictures/les3freres.jpg";
import lePari from "./pictures/lePari.jpg";
import arretemoisitupeux from "./pictures/arretemoisitupeux.jpg";
import americanSniper from "./pictures/americanSniper.jpg";
import matrix from "./pictures/matrix.jpg";
import jesuisunelegende from "./pictures/jesuisunelegende.jpg";
import derniertrainpourbusan from "./pictures/derniertrainpourbusan.jpg";
import parasite from "./pictures/parasite.jpg";
import pulpFiction from "./pictures/pulpFiction.jpg";
import theHatefulEight from "./pictures/theHatefulEight.jpg";
import joker from "./pictures/joker.jpg";
import blackPanther from "./pictures/blackPanther.jpg";
import it from "./pictures/it.jpg";
import lesTempsModernes from "./pictures/lesTempsModernes.jpg";

class App extends React.Component {
    render (){
        return (
          <div>
            <div className="header col-md-6 offset-md-2 text-center">
                <h1 id="main-title">
                    <img src={movies} />
                </h1> 
                Bienvenue sur le site MyMovies. Ici vous pouvez accéder à une liste de films et les ajouter<br/>
                dans votre liste de favoris en cliquant dessus.
            </div>
            <div className="container-fluid">
                <Movies />
            </div>
            <footer className="text-center">© Elodie Roger</footer>
        </div>  
        )
    };
}

class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    id: 1,
                    name: 'The silence',
                    image: theSilence,
                    fav: false,
                },
                {
                    id: 2,
                    name: 'Les 3 frères',
                    image: les3freres,
                    fav: false,
                },
                {
                    id: 3,
                    name: 'Le pari',
                    image: lePari, 
                    fav: false,
                },
                {
                    id: 4,
                    name: 'Arrête moi si tu peux',
                    image: arretemoisitupeux, 
                    fav: false,
                },
                {
                    id: 5,
                    name: 'American sniper',
                    image: americanSniper, 
                    fav: false,
                },
                {
                    id: 6,
                    name: 'Matrix',
                    image: matrix, 
                    fav: false,
                },
                {
                    id: 7,
                    name: 'Je suis une légende',
                    image: jesuisunelegende, 
                    fav: false,
                },
                {
                    id: 8,
                    name: 'Dernier train pour Busan',
                    image: derniertrainpourbusan, 
                    fav: false,
                },
                {
                    id: 9,
                    name: 'Parasite',
                    image: parasite, 
                    fav: false,
                },
                {
                    id: 10,
                    name: 'Pulp fiction',
                    image: pulpFiction, 
                    fav: false,
                },
                {
                    id: 11,
                    name: 'Les 8 salopards',
                    image: theHatefulEight, 
                    fav: false,
                },
                {
                    id: 12,
                    name: 'Joker',
                    image: joker, 
                    fav: false,
                },
                {
                    id: 13,
                    name: 'Black panther',
                    image: blackPanther, 
                    fav: false,
                },
                {
                    id: 14,
                    name: 'Ça',
                    image: it, 
                    fav: false,
                },
                {
                    id: 15,
                    name: 'Les temps modernes',
                    image: lesTempsModernes, 
                    fav: false,
                },
            ],
        }
    }

    // fonction qui retourne la liste des films non favoris 
    moviesFavFalse () {
        let moviesNotFav = []

        for(let i = 0; i < this.state.movies.length; i++) {
            if(this.state.movies[i].fav === false) {
                moviesNotFav.push(this.state.movies[i])
            }
        }
        return moviesNotFav
    }

    // fonction qui retourne la liste des films favoris
    moviesFavTrue () {
        let moviesFav = []

        for(let i = 0; i < this.state.movies.length; i++) {
            if(this.state.movies[i].fav === true) {
                moviesFav.push(this.state.movies[i])
            }
        }
        return moviesFav
    }

    // Au clic sur un film mettre fav à true 
    handleClick (movie) {
        if(movie.fav == false) {
            movie.fav = true
        } else {
            movie.fav = false
        }
        this.setState(this)
    }

    render() {
        let listNotFavs = this.moviesFavFalse()

        //Affichage des films non favoris
        let listMoviesNotFav = listNotFavs.map(
            listNotFav => 
            <div 
             key={listNotFav.id} 
             className="movie-not-fav text-center"
             onClick={() => this.handleClick(listNotFav)}
            >
                <div className="add-fav">
                    <button className="button-add-fav">Cliquez pour<br/>ajouter aux favoris</button>
                </div>
                <img src={listNotFav.image} />
                <div className="movie-name">{listNotFav.name}</div>
            </div>
        )

        let listFavs = this.moviesFavTrue()

        //Affichage des films favoris
        let listMoviesFav = listFavs.map(
            listFav => 
            <div 
             key={listFav.id} 
             className="movie-fav text-center"
            >
                <div>
                    <button 
                    className="btn btn-danger cross-remove-fav"
                    onClick={() => this.handleClick(listFav)}>X</button>
                </div>
                <img src={listFav.image} />
                <div className="movie-name">{listFav.name}</div>
            </div>
        )

        return (
            <div className="row">
               <div className="movies col-md-10">
                    {listMoviesNotFav}
                </div> 
                <div className="fav col-md-2">
                    <div className="favorites">
                        <img src={favorites} />
                    </div>
                    {listMoviesFav}
                </div>
            </div>
        
        )
    }
}


export default App;

