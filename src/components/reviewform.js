// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { addReview } from '../actions/reviewActions';
// import { useSelector } from 'react-redux';

// const ReviewForm = ({ movieId }) => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     rating: '',
//     review: ''
//   });
//   const [error, setError] = useState('');

//   const {rating, review } = formData;

//   const onChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     if (!rating || !review) {
//       setError('Please provide a rating and a review.');
//     } else {
//       dispatch(addReview(movieId, {username, rating, review}));
//       setFormData({rating: '', review: '' });
//       setError('');
//     }
//   };

//   return (
//     <Form onSubmit={onSubmit}>
//       {error && <Alert variant="danger">{error}</Alert>}
//       <Form.Group controlId="rating">
//         <Form.Label>Rating</Form.Label>
//         <Form.Control
//           type="number"
//           name="rating"
//           value={rating}
//           onChange={onChange}
//           min="1"
//           max="5"
//           required
//         />
//       </Form.Group>
//       <Form.Group controlId="review">
//         <Form.Label>Review</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           name="review" 
//           value={review}
//           onChange={onChange}
//           required
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default ReviewForm;
import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux'; // Importing useSelector
import { fetchMovie } from "../actions/movieActions";
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { Image } from 'react-bootstrap';
import ReviewForm from './reviewform';

class MovieDetail extends Component {
    componentDidMount() {
        const { dispatch, selectedMovie, movieId} = this.props;
        if (!selectedMovie) {
            dispatch(fetchMovie(movieId));
        }
    }

    render() {
        const { selectedMovie, movieId } = this.props;
        const username = useSelector(state => state.auth.username); // Accessing username from Redux store

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
                        </ListGroupItem>
                        <ListGroupItem>
                            <h5>Reviews:</h5>
                            <Row>
                                {selectedMovie.movie_reviews && selectedMovie.movie_reviews.map((review, i) => (
                                    <Col key={i} xs={12} sm={6} md={4} lg={3}>
                                        <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                                            <p style={{ fontWeight: 'bold' }}>{review.username}</p>
                                            <p>{review.review}</p>
                                            <p><BsStarFill /> {review.rating}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
                <Card.Body>
                    <h5>Leave a Review</h5>
                    <ReviewForm movieId={movieId} username={username} /> {/* Passing username to ReviewForm */}
                </Card.Body>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        selectedMovie: state.movie.selectedMovie,
        movieId: ownProps.movieId,
    }
}

export default connect(mapStateToProps)(MovieDetail);
