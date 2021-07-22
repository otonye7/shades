import { useState } from 'react';
import { WriteQuestionsContainer } from './write-questions.styles';
import QuestionsForm from '../question-form/question-form.component';
import axios from 'axios';

const WriteReview = () => {
    const [show, setShow] = useState(false)
    const [questions, setQuestions] = useState('');

    const handleShow = () => {
        setShow(!show)
    }

    const handleQuestions = (e) => {
        setQuestions(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:8000/api/questions`, {
                questions
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
        <WriteQuestionsContainer>
            <div className='review-button'>
                <button className='r-button' onClick={handleShow}>WRITE A Question</button>
            </div>
            <br />
            <br />
            {
                show ?
                    <div className='fields'>
                        <QuestionsForm
                            questions={questions}
                            handleQuestions={handleQuestions}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                    :
                    null
            }

        </WriteQuestionsContainer>
    )
}

export default WriteReview