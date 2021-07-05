import { FirstGridContainer } from './second-grid.styles';
import Man from  '../../assets/Audio-half.png';
import Woman from '../../assets/bluelight.png';

const SecondGrid = () => {
    return (
        <FirstGridContainer>
             <div className='leftimage'>
                <img src={Woman} alt="" />
             </div>
             <div className='leftimage'>
                <img src={Man} alt="" />
             </div>
        </FirstGridContainer>
    )
}

export default SecondGrid;