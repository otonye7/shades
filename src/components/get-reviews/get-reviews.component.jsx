import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import { GetReviewsContainer } from './get-reviews.styles';
import { Link } from 'react-router-dom';
import ReviewItems from '../reviews-items/reviews-items.component';


const GetReviews = () => {
    const [page, setPage] = useState(1);
    const [review, setReview] = useState([]);

    useEffect(() => {
        loadReviews()
    }, [])

    const loadReviews = async () => {
        let res = await axios.get(`http://localhost:8000/api/get-reviews?_page=${page}`)
        console.log(res)
        setReview(res.data)
    }

    return (
        <GetReviewsContainer>
            <div className='link-container'>
                <Link className='link-reviews'>Reviews</Link>
            </div>
            <br />
            <div className='review-border'></div>
            <br />
            <div className='previews'>
                {
                    review.map((review) => <ReviewItems key={review._id} review={review} />)
                }
            </div>
            <Pagination count={10} defaultPage={1} page={page} color="primary" onChange={(event, value) => setPage(value)} />
        </GetReviewsContainer>
    )
}

export default GetReviews










