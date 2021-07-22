import { ReviewsItemsContainer } from './reviews-items.styles';
import Avatar from '@material-ui/core/Avatar';
import StarRateIcon from '@material-ui/icons/StarRate';



const ReviewsItems = ({ review }) => {
    const { title, name, reviews } = review

    return (
        <ReviewsItemsContainer>
            <div className='review-items-container'>
                <div className='name-container'>
                    <Avatar className='avatar'>{name[0]}</Avatar>
                    <h5 className='review-name'>{name}</h5>
                </div>
                <div className='icons'>
                    <StarRateIcon className='star' />
                    <StarRateIcon className='star' />
                    <StarRateIcon className='star' />
                    <StarRateIcon className='star' />
                    <StarRateIcon className='star' />
                </div>
                <h5 className='review-title'>{title}</h5>
                <h5 className='review-reviews'>{reviews}</h5>
                <br />
                <div className='item-border'></div>
                <br />
            </div>

        </ReviewsItemsContainer>
    )
}

export default ReviewsItems;


