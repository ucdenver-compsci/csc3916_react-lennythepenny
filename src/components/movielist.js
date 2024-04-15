import React, { Component } from 'react';
import { fetchMovies } from "../actions/movieActions";
import { setMovie } from "../actions/movieActions";
import { connect } from 'react-redux';
import { Image, Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { LinkContainer } from 'react-router-bootstrap';
import MovieDetail from './moviedetail'; 

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchMovies());
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

        return (
            <div>
                <Carousel onSelect={this.handleSelect}>
                    {movies && movies.map((movie) =>
                        <Carousel.Item key={movie._id}>
                            <div>
                                <LinkContainer to={'/movie/'+movie._id} onClick={() => this.handleClick(movie)}>
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
                {/* Render MovieDetail component with movieId prop */}
                {movies && movies.map((movie) => 
                    <MovieDetail key={movie._id} movieId={movie._id} />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps)(MovieList);
