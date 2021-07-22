import { ReviewsContainer } from './questions.styles';
import WriteQuestions from '../write-questions/write-questions.component';
import GetQuestions from '../get-questions/get-questions.component'

const Questions = () => {
    return (
        <ReviewsContainer>
            <div className='container'>
                <div className='header'>
                    <h2 className='customers-text'>Questions</h2>
                </div>
                <br />
                <WriteQuestions />
                <br />
                <GetQuestions />
            </div>
        </ReviewsContainer>
    )
}

export default Questions;