import React, { Component } from 'react';
import { fetchMovie } from "../actions/movieActions";
import {connect} from 'react-redux';
import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs'
import { Image } from 'react-bootstrap';

class MovieDetail extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        if (this.props.selectedMovie == null) {
            dispatch(fetchMovie(this.props.movieId));
        }
    }

    render() {
        const DetailInfo = () => {
            if (!this.props.selectedMovie) {
                return <div>Loading....</div>
            }

            return (
                <Card>
                    <Card.Header>Movie Detail</Card.Header>
                    <Card.Body>
                        <Image className="image" src={this.props.selectedMovie.imageUrl} thumbnail />
                    </Card.Body>
                    <ListGroup>
                        <ListGroupItem>{this.props.selectedMovie.title}</ListGroupItem>
                        <ListGroupItem>
                            {this.props.selectedMovie.actors.map((actor, i) =>
                                <p key={i}>
                                    <b>{actor.actorName}</b> {actor.characterName}
                                </p>)}
                        </ListGroupItem>
                        <ListGroupItem><h4><BsStarFill/> {this.props.selectedMovie.avgRating}</h4></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        {this.props.selectedMovie.reviews.map((review, i) =>
                            <p key={i}>
                                <b>{review.username}</b>&nbsp; {review.review}
                                &nbsp;  <BsStarFill /> {review.rating}
                            </p>
                        )}
                    </Card.Body>
                </Card>
            )
        }

        return (
            <DetailInfo />
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movie.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetail);
// MovieDetail.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const MovieDetail = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [averageRating, setAverageRating] = useState(null);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch movie details
//     axios.get(`/api/movies/${movieId}`)
//       .then(response => {
//         setMovie(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching movie details:', error);
//       });

//     // Fetch average rating
//     axios.get(`/api/movies/${movieId}/averageRating`)
//       .then(response => {
//         setAverageRating(response.data.averageRating);
//       })
//       .catch(error => {
//         console.error('Error fetching average rating:', error);
//       });

//     // Fetch reviews
//     axios.get(`/api/movies/${movieId}/reviews`)
//       .then(response => {
//         setReviews(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching reviews:', error);
//       });
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-detail">
//       <h2>{movie.title}</h2>
//       <img src={movie.imageUrl} alt={movie.title} />
//       <h3>Actors:</h3>
//       <ul>
//         {movie.actors && movie.actors.map(actor => (
//           <li key={actor.actorName}>{actor.actorName} as {actor.characterName}</li>
//         ))}
//       </ul>
//       <h3>Average Rating: {averageRating}</h3>
//       <h3>Reviews:</h3>
//       <ul>
//         {reviews && reviews.map(review => (
//           <li key={review._id}>
//             <strong>{review.username}</strong> - Rating: {review.rating}<br />
//             {review.review}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieDetail;

