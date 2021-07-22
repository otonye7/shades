import { QuestionsItemsContainer } from './questions-items.styles';




const QuestionsItems = ({ questions }) => {
    const { question } = questions

    return (
        <QuestionsItemsContainer>
            <div className='review-items-container'>
                <div className='name-container'>
                    <h5 className='review-name'>{question}</h5>
                </div>
            </div>

        </QuestionsItemsContainer>
    )
}

export default QuestionsItems;