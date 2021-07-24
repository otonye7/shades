import { useState } from 'react';
import { WriteReviewContainer } from './write-review.styles';
import ReviewForm from '../review-form/review-form.component';
import axios from 'axios';

const WriteReview = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('');
    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [reviews, setReviews] = useState('')


    const handleShow = () => {
        setShow(!show)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleReviews = (e) => {
        setReviews(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`https://sohoquette.herokuapp.com/api/reviews`, {
                email,
                title,
                name,
                reviews
            })
            console.log(res)
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <WriteReviewContainer>
            <div className='review-button'>
                <button className='r-button' onClick={handleShow}>WRITE A REVIEW</button>
            </div>
            <br />
            <br />
            {
                show ?
                    <div className='fields'>
                        <ReviewForm
                            name={name}
                            title={title}
                            email={email}
                            reviews={reviews}
                            handleName={handleName}
                            handleTitle={handleTitle}
                            handleEmail={handleEmail}
                            handleReviews={handleReviews}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    :
                    null
            }

        </WriteReviewContainer>
    )
}

export default WriteReview