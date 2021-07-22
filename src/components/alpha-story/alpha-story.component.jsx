import { AlphaContainer } from './alpha-story.styles';
import Faq from '../faq/faq.component';
import Reviews from '../reviews/reviews.component';
import Questions from '../questions/questions.component';
import InstaGrid from '../insta-grid/insta-grid.component';

const AlphaStory = () => {
    return (
        <AlphaContainer>
            <div className=''>
                <h2 className='title'>Alpha Story</h2>
                <div className='span'>
                    <span className='text-alpha'>Go from boardroom to boardwalk in an instant with our Alpha collection.
                        With its dual plastic-metal construction, the Alpha line can easily be dressed up or down –
                        meaning you can take them wherever your day takes you.
                    </span>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h3 className='faq-text'>FAQ</h3>
            <Faq />
            <br />
            <br />
            <Reviews />
            <br />
            <Questions />
            <div className='other'>
                <h2 className='texts'>How Others Wear It</h2>
                <br />
                <InstaGrid />
            </div>
        </AlphaContainer>

    )
}

export default AlphaStory;