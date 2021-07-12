import { FeaturedContainer } from './new-arrival.styles';
import {Link} from 'react-router-dom';

const NewArrival = () => {
    return (
        <FeaturedContainer>
              <div className='bestsellertext'>
                <h2 className='text'>NEW ARRIVAL</h2>
            </div> 
            <div className='links'>
                <Link to='/new-arrival' className='link-text'>View all</Link>
            </div>
        </FeaturedContainer>
        
    )
}

export default NewArrival;