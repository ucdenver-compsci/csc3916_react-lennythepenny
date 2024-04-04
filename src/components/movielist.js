// import React, { Component } from 'react';
// import { fetchMovies } from "../actions/movieActions";
// import { setMovie } from "../actions/movieActions";
// import {connect} from 'react-redux';
// import {Image, Nav} from 'react-bootstrap';
// import { Carousel } from 'react-bootstrap';
// import { BsStarFill} from 'react-icons/bs'
// import {LinkContainer} from 'react-router-bootstrap';

// class MovieList extends Component {
//     constructor(props) {
//         super(props);
//         this.handleSelect = this.handleSelect.bind(this);
//     }

//     componentDidMount() {
//         const {dispatch} = this.props;
//         dispatch(fetchMovies());
//     }

//     handleSelect(selectedIndex, e) {
//         const {dispatch} = this.props;
//         dispatch(setMovie(this.props.movies[selectedIndex]));
//     }

//     handleClick = (movie) => {
//         const {dispatch} = this.props;
//         dispatch(setMovie(movie));
//     }

//     render() {
//         const MovieListCarousel = ({movieList}) => {
//             if (!movieList) {
//                 return <div>Loading....</div>
//             }

//             return (
//                 <Carousel onSelect={this.handleSelect}>
//                     {movieList.map((movie) =>
//                         <Carousel.Item key={movie._id}>
//                             <div>
//                                 <LinkContainer to={'/movie/'+movie._id} onClick={()=>this.handleClick(movie)}>
//                                     <Nav.Link><Image className="image" src={movie.imageUrl} thumbnail /></Nav.Link>
//                                 </LinkContainer>
//                             </div>
//                             <Carousel.Caption>
//                                 <h3>{movie.title}</h3>
//                                 <BsStarFill glyph={'star'} /> {movie.avgRating} &nbsp;&nbsp; {movie.releaseDate}
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     )}

//                 </Carousel>
//             )
//         }

//         return (
//             <MovieListCarousel movieList={this.props.movies} />
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         movies: state.movie.movies
//     }
// }

// export default connect(mapStateToProps)(MovieList);

import React, { Component } from 'react';
import { fetchTopRatedMovies } from "../actions/movieActions"; // Assuming you have a separate action for fetching top-rated movies
import { setMovie } from "../actions/movieActions";
import { connect } from 'react-redux';
import { Image, Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap';

class MovieList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchTopRatedMovies()); // Fetch top-rated movies instead of all movies
    }

    handleSelect(selectedIndex, e) {
        const { dispatch } = this.props;
        dispatch(setMovie(this.props.movies[selectedIndex]));
    }

    handleClick = (movie) => {
        const { dispatch } = this.props;
        dispatch(setMovie(movie));
    }

    render() {
        const { movies } = this.props;

        const MovieListCarousel = () => {
            if (!movies) {
                return <div>Loading....</div>
            }

            return (
                <Carousel onSelect={(selectedIndex, e) => this.handleSelect(selectedIndex, e)}>
                    {movies.map((movie) =>
                        <Carousel.Item key={movie._id}>
                            <div>
                                <LinkContainer to={'/movie/' + movie._id} onClick={() => this.handleClick(movie)}>
                                    <Nav.Link><Image className="image" src={movie.imageUrl} thumbnail /></Nav.Link>
                                </LinkContainer>
                            </div>
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                                <BsStarFill glyph={'star'} /> {movie.avgRating} &nbsp;&nbsp; {movie.releaseDate}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}
                </Carousel>
            )
        }

        return (
            <MovieListCarousel />
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.topRatedMovies // Assuming you store top-rated movies in Redux state
    }
}

export default connect(mapStateToProps)(MovieList);
