import { CardContainer } from './card-one.styles';
import Glass from '../../assets/glass1.png';
import GlassTwo from '../../assets/glass2.png';
import GlassThird from '../../assets/glass3.png';


const CardOne = () => {
    return (
        <CardContainer>
            <div className='leftimage'>
                <img src={Glass} alt="" />
            </div>

            <div className='leftimage'>
                <img src={GlassTwo} alt="" />
            </div>

            <div className='leftimage'>
                <img src={GlassThird} alt="" />
            </div>
        </CardContainer>
    )
}

export default CardOne;
