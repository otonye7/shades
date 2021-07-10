import { AlphaContainer } from './alpha-story.styles';
import Icons from '../icons/icons.component';
import Faq from '../faq/faq.component';
import InstaGrid from '../insta-grid/insta-grid.component';

const AlphaStory = () => {
    return (
        <AlphaContainer>
        <div className=''>
            <h2 className='title'>Alpha Story</h2>
        <div className='span'>
        <span className='text'>Go from boardroom to boardwalk in an instant with our Alpha collection.
             With its dual plastic-metal construction, the Alpha line can easily be dressed up or down –
             meaning you can take them wherever your day takes you.
        </span>
        </div>
        </div> 
        <br />
        <br />
        <br />
        <Icons />
        <br />
        <br />
        <Faq />
        <br />
        <br />
        <br />
        <div className='other'>
                <h2 className='texts'>How Others Wear It</h2>
                <br />
                <InstaGrid />
        </div>
        </AlphaContainer>
       
    )
}

export default AlphaStory;