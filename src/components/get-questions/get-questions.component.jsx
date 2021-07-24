import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetQuestionsContainer } from './get-questions.styles';
import { Link } from 'react-router-dom';
import QuestionsItems from '../questions-items/questions-items.component';

const GetQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        loadQuestions()
    }, [])

    const loadQuestions = async () => {
        let res = await axios.get(`https://sohoquette.herokuapp.com/api/get-questions`)
        setQuestions(res.data)
    }
    return (
        <GetQuestionsContainer>
            <div className='link-container'>
                <Link className='link-reviews'>Questions</Link>
            </div>
            <br />
            <div className='review-border'></div>
            <br />
            <div className='previews'>
                {
                    questions.map((questions) => <QuestionsItems key={questions._id} questions={questions} />)
                }
            </div>
        </GetQuestionsContainer>
    )
}

export default GetQuestions;