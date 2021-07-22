import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetReviewsContainer } from './get-reviews.styles';
import { Link } from 'react-router-dom';
import ReviewItems from '../reviews-items/reviews-items.component';

const GetReviews = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        loadReviews()
    }, [])

    const loadReviews = async () => {
        let res = await axios.get(`http://localhost:8000/api/get-reviews`)
        console.log(res)
        setReview(res.data)
    }
    console.log(review)
    return (
        <GetReviewsContainer>
            <div className='link-container'>
                <Link className='link-reviews'>Reviews</Link>
                <Link className='link-question'>Questions</Link>
            </div>
            <br />
            <div className='previews'>
                {
                    review.map((review) => <ReviewItems key={review._id} review={review} />)
                }
            </div>
        </GetReviewsContainer>
    )
}

export default GetReviews