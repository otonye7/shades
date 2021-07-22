import { useState } from 'react';
import { WriteReviewContainer } from './write-review.styles';
import Button from '../button/button.component';
import ReviewForm from '../review-form/review-form.component';

const WriteReview = () => {
    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    console.log(show)
    return (
        <WriteReviewContainer>
            <div className='review-button'>
                <button className='r-button' onClick={handleShow}>WRITE A REVIEW</button>
            </div>
            <br />
            {
                show ?
                    <div className='fields'>
                        <ReviewForm />
                    </div>
                    :
                    null
            }

        </WriteReviewContainer>
    )
}

export default WriteReview