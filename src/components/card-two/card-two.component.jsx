import { CardContainer } from './card-two.styles';
import Glass from  '../../assets/micheal.jpg';
import {Link} from 'react-router-dom';

const CardTwo = () => {
    return (
        <CardContainer>
            <div className='leftimage'>
                <img src={Glass} alt="" />
                <div className='links'>
                    <Link className='link-text'>Alpha Frame</Link> 
                </div>
             </div>

             <div className='leftimage'>
                <img src={Glass} alt="" />
                <div className='links'>
                    <Link className='link-text'>Alpha Frame</Link> 
                </div>
             </div>

             <div className='leftimage'>
                <img src={Glass} alt="" />
                <div className='links'>
                    <Link className='link-text'>Alpha Frame</Link> 
                </div>
             </div>
        </CardContainer>
    )
}

export default CardTwo;