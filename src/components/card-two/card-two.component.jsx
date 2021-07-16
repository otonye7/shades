import { CardContainer } from './card-two.styles';
import Glass from '../../assets/glass6.png';
import GlassFour from '../../assets/glass4.png';
import GlassFive from '../../assets/glass5.png';


const CardTwo = () => {
    return (
        <CardContainer>
            <div className='leftimage'>
                <img src={Glass} alt="" />
            </div>

            <div className='leftimage'>
                <img src={GlassFour} alt="" />
            </div>

            <div className='leftimage'>
                <img src={GlassFive} alt="" />
            </div>
        </CardContainer>
    )
}

export default CardTwo;