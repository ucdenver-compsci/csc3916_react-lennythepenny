// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchMovie } from "../actions/movieActions";
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { BsStarFill } from 'react-icons/bs';
// import { Image } from 'react-bootstrap';
// import ReviewForm from './reviewform';

// class MovieDetail extends Component {
//     componentDidMount() {
//         const { dispatch, selectedMovie, movieId } = this.props;
//         if (!selectedMovie) {
//             dispatch(fetchMovie(movieId));
//         }
//     }

//     render() {
//         const { selectedMovie, movieId } = this.props;

//         if (!selectedMovie) {
//             return <div>Loading....</div>;
//         }

//         return (
//             <Card>
//                 <Card.Header>Movie Detail</Card.Header>
//                 <Card.Body>
//                     {selectedMovie.imageUrl && (
//                         <Image className="image" src={selectedMovie.imageUrl} thumbnail />
//                     )}
//                 </Card.Body>
//                 <ListGroup>
//                     <ListGroupItem>{selectedMovie.title}</ListGroupItem>
//                     <ListGroupItem>
//                         {selectedMovie.actors && selectedMovie.actors.map((actor, i) => (
//                             <p key={i}>
//                                 <b>{actor.actorName}</b> {actor.characterName}
//                             </p>
//                         ))}
//                     </ListGroupItem>
//                     <ListGroupItem>
//                         <h4><BsStarFill/> {selectedMovie.avgRating}</h4>
//                     </ListGroupItem>
//                 </ListGroup>
//                 <Card.Body>
//                     {selectedMovie.reviews && selectedMovie.reviews.map((review, i) => (
//                         <div key={i}>
//                             <p><b>{review.username}</b>&nbsp; {review.review}</p>
//                             <p><BsStarFill /> {review.rating}</p>
//                         </div>
//                     ))}
//                 </Card.Body>
//                     {/* Render the ReviewForm component */}
//                 <Card.Body>
//                     <h5>Leave a Review</h5>
//                     <ReviewForm movieId={movieId} />
//                 </Card.Body>
//             </Card>
//         );
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     return {
//         selectedMovie: state.movie.selectedMovie,
//         movieId: ownProps.movieId
//     }
// }

// export default connect(mapStateToProps)(MovieDetail);
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchMovie } from "../actions/movieActions";
// import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import { BsStarFill } from 'react-icons/bs';
// import { Image } from 'react-bootstrap';
// import ReviewForm from './reviewform';

// class MovieDetail extends Component {
//     componentDidMount() {
//         const { dispatch, selectedMovie, movieId } = this.props;
//         if (!selectedMovie) {
//             dispatch(fetchMovie(movieId));
//         }
//     }

//     render() {
//         const { selectedMovie, movieId } = this.props;

//         if (!selectedMovie) {
//             return <div>Loading....</div>;
//         }

//         return (
//             <Card>
//                 <Card.Header>Movie Detail</Card.Header>
//                 <Card.Body>
//                     {selectedMovie.imageUrl && (
//                         <Image className="image" src={selectedMovie.imageUrl} thumbnail />
//                     )}
//                     <ListGroup>
//                         <ListGroupItem>{selectedMovie.title}</ListGroupItem>
//                         <ListGroupItem>
//                             {selectedMovie.actors && selectedMovie.actors.map((actor, i) => (
//                                 <p key={i}>
//                                     <b>{actor.actorName}</b> {actor.characterName}
//                                 </p>
//                             ))}
//                         </ListGroupItem>
//                         <ListGroupItem>
//                             <h4><BsStarFill/> {selectedMovie.avgRating}</h4>
//                             {/* Render reviews here */}
//                             {selectedMovie.reviews && selectedMovie.reviews.map((review, i) => (
//                                 <div key={i}>
//                                     <p><b>{review.username}</b>&nbsp; {review.review}</p>
//                                     <p><BsStarFill /> {review.rating}</p>
//                                 </div>
//                             ))}
//                         </ListGroupItem>
//                     </ListGroup>
//                 </Card.Body>
//                 {/* Render the ReviewForm component */}
//                 <Card.Body>
//                     <h5>Leave a Review</h5>
//                     <ReviewForm movieId={movieId} />
//                 </Card.Body>
//             </Card>
//         );
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     return {
//         selectedMovie: state.movie.selectedMovie,
//         movieId: ownProps.movieId
//     }
// }

// export default connect(mapStateToProps)(MovieDetail);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovie } from "../actions/movieActions";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { Image } from 'react-bootstrap';
import ReviewForm from './reviewform';

class MovieDetail extends Component {
    componentDidMount() {
        const { dispatch, selectedMovie, movieId } = this.props;
        if (!selectedMovie) {
            dispatch(fetchMovie(movieId));
        }
    }

    render() {
        const { selectedMovie, movieId } = this.props;

        if (!selectedMovie) {
            return <div>Loading....</div>;
        }

        return (
            <Card>
                <Card.Header>Movie Detail</Card.Header>
                <Card.Body>
                    {selectedMovie.imageUrl && (
                        <Image className="image" src={selectedMovie.imageUrl} thumbnail />
                    )}
                    <ListGroup>
                        <ListGroupItem>{selectedMovie.title}</ListGroupItem>
                        <ListGroupItem>
                            {selectedMovie.actors && selectedMovie.actors.map((actor, i) => (
                                <p key={i}>
                                    <b>{actor.actorName}</b> {actor.characterName}
                                </p>
                            ))}
                        </ListGroupItem>
                        <ListGroupItem>
                            <h4><BsStarFill/> {selectedMovie.avgRating}</h4>
                            {/* Render reviews here */}
                            {selectedMovie.reviews && selectedMovie.reviews.map((review, i) => (
                                <div key={i}>
                                    <p><b>{review.username}</b>&nbsp; {review.review}</p>
                                    <p><BsStarFill /> {review.rating}</p>
                                </div>
                            ))}
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
                {/* Render the ReviewForm component */}
                <Card.Body>
                    <h5>Leave a Review</h5>
                    <ReviewForm movieId={movieId} />
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedMovie: state.movie.selectedMovie,
        movieId: ownProps.movieId
    }
}

export default connect(mapStateToProps)(MovieDetail);
