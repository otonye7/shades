import { CardContainer } from './card-one.styles';
import Glass from  '../../assets/claudio.jpg';
import {Link} from 'react-router-dom';

const CardOne = () => {
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

export default CardOne;
