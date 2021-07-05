import { BestSellerContainer } from './best-seller.styles';
import {Link} from 'react-router-dom';

const BestSeller = () => {
    return (
        <BestSellerContainer>
            <div className='bestsellertext'>
                <h2 className='text'>BEST SELLER</h2>
            </div> 
            <div className='links'>
                <Link className='link-text'>View all</Link>
            </div>
        </BestSellerContainer>
    )
}


export default BestSeller;