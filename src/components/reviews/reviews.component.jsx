import { ReviewsContainer } from './reviews.styles';
import CardContainer from '../reviews-carousel/reviews-carousel.component';
import WriteReview from '../write-review/write-review.component';

const Reviews = () => {
    return (
        <ReviewsContainer>
            <div className='container'>
                <div className='header'>
                    <h2 className='customers-text'>Customers Reviews</h2>
                </div>
                <br />
                <div className='others'>
                    <h3 className='others-text'>Other top rated products</h3>
                </div>
                <CardContainer />
                <br />
                <br />
                <WriteReview />
            </div>
        </ReviewsContainer>
    )
}

export default Reviews;