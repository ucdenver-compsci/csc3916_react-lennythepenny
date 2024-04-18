import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addReview } from '../actions/reviewActions';

const ReviewForm = ({ movieId, username }) => { // Receive username prop
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        rating: '',
        review: ''
    });
    const [error, setError] = useState('');

    const { rating, review } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const onSubmit = e => {
    //     e.preventDefault();
    //     if (!rating || !review) {
    //         setError('Please provide a rating and a review.');
    //     } else {
    //         dispatch(addReview(movieId, { username, rating, review }));
    //         setFormData({ rating: '', review: '' });
    //         setError('');
    //     }
    // };
    // export default ReviewForm;
const onSubmit = async (e) => {
    e.preventDefault();
    if (!rating || !review) {
        setError('Please provide a rating and a review.');
    } else {
        try {
            const response = await fetch('/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    movieId,
                    username,
                    review,
                    rating,
                }),
            });
            if (response.ok) {
                // Handle successful review submission
                setFormData({ rating: '', review: '' });
                setError('');
            } else {
                // Handle failed review submission
                setError('Failed to submit review. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    }
};

    return (
        <Form onSubmit={onSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                    type="number"
                    name="rating"
                    value={rating}
                    onChange={onChange}
                    min="1"
                    max="5"
                    required
                />
            </Form.Group>
            <Form.Group controlId="review">
                <Form.Label>Review</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="review"
                    value={review}
                    onChange={onChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;
