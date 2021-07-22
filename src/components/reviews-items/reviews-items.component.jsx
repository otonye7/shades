import { ReviewsItemsContainer } from './reviews-items.styles';


const ReviewsItems = ({ review }) => {
    const { title, name, reviews } = review

    return (
        <ReviewsItemsContainer>
            <div className='review-items-container'>
                <h5 className='review-name'>{name}</h5>
                <h5 className='review-title'>{title}</h5>
                <h5 className='review-reviews'>{reviews}</h5>
                {/* <div className='menu-title'>
                    <h5 className='title'>${price}</h5>
                </div> */}
            </div>

        </ReviewsItemsContainer>
    )
}

export default ReviewsItems;