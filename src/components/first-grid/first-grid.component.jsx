import { FirstGridContainer } from './first-grid.styles';
import Man from  '../../assets/male.png';
import Woman from '../../assets/females.png';
import {useHistory} from 'react-router-dom'

const FirstGrid = () => {
    const history = useHistory()
    return (
        <FirstGridContainer>
             <div className='leftimage'>
                <img src={Man} alt="" />
                <div className='male-container'>
                      <h2 className='text'>Men's</h2>
                      <button onClick={() => history.push('/men')} className='btn'>Show Now</button>
                </div>
             </div>
             <div className='leftimage'>
                <img src={Woman} alt="" />
                <div className='female-container'>
                      <h2 className='text'>Women's</h2>
                      <button onClick={() => history.push('/women')} className='btn'>Show Now</button>
                </div>
              
             </div>
        </FirstGridContainer>
    )
}

export default FirstGrid;