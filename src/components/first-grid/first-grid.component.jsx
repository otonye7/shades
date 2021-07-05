import { FirstGridContainer } from './first-grid.styles';
import Man from  '../../assets/male.png';
import Woman from '../../assets/females.png';

const FirstGrid = () => {
    return (
        <FirstGridContainer>
             <div className='leftimage'>
                <img src={Man} alt="" />
                <div className='container'>
                      <h2 className='text'>Men's</h2>
                      <button className='btn'>Show Now</button>
                </div>
             </div>
             <div className='leftimage'>
                <img src={Woman} alt="" />
                <div className='container'>
                      <h2 className='text'>Women's</h2>
                      <button className='btn'>Show Now</button>
                </div>
              
             </div>
        </FirstGridContainer>
    )
}

export default FirstGrid;