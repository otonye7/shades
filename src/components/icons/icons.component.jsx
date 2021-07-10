import { IconsContainer } from './icons.styles';
import LightWeight from  '../../assets/lightweight.png';
import Durable from  '../../assets/durable.png';
import Antislip from  '../../assets/antislip.png';
import Antiscratch from  '../../assets/antiscratch.png';
import Sun from  '../../assets/sun.png';
import Frame from  '../../assets/frame.png';
import Satisfaction from  '../../assets/satisfaction.png';
import Hassle from  '../../assets/hassle.png';

const Icons = () => {
    return (
        <IconsContainer>
        <div className='container'>
           <div className='first-container'>
              <img src={LightWeight} alt="" />
              <h4 className='text'>Light Weight</h4>
           </div>
           <div className='first-container'>
              <img src={Durable} alt="" />
              <h4 className='text'>Durable</h4>
           </div>
           <div className='first-container'>
              <img src={Antislip} alt="" />
              <h4 className='text'>Antislip Technology</h4>
           </div>
           <div className='first-container'>
              <img src={Antiscratch} alt="" />
              <h4 className='text'>AntiScratch</h4>
           </div>
           <div className='first-container'>
              <img src={Sun} alt="" />
              <h4 className='text'>Sun Uv Light</h4>
           </div>
           <div className='first-container'>
              <img src={Frame} alt="" />
              <h4 className='text'>Glass Frame</h4>
           </div>
           <div className='first-container'>
              <img src={Satisfaction} alt="" />
              <h4 className='text'>Satisfaction Guarantee</h4>
           </div>
           <div className='first-container'>
              <img src={Hassle} alt="" />
              <h4 className='text'>Hassle Return exchange</h4>
           </div>
        </div> 
        </IconsContainer>
       
    )
}

export default Icons;