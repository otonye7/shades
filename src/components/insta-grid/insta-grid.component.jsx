import { InstaContainer } from './insta-grid.styles';
import A from  '../../assets/a.jpg';
import B from  '../../assets/b.jpg';
import C from  '../../assets/c.jpg';
import D from  '../../assets/d.jpg';
import E from  '../../assets/e.jpg';
import G from  '../../assets/g.jpg';
import H from  '../../assets/h.jpg';

const InstaGrid = () => {
    return (
        <InstaContainer>
             <div className='leftimage'>
                <img src={A} alt="" />
             </div>
             <div className='leftimage'>
                <img src={H} alt="" />
             </div>
             <div className='leftimage'>
                <img src={B} alt="" />
             </div>
             <div className='leftimage'>
                <img src={C} alt="" />
             </div>
             <div className='leftimage'>
                <img src={D} alt="" />
             </div>
             <div className='leftimage'>
                <img src={B} alt="" />
             </div>
             <div className='leftimage'>
                <img src={D} alt="" />
             </div>
             <div className='leftimage'>
                <img src={G} alt="" />
             </div>
             <div className='leftimage'>
                <img src={H} alt="" />
             </div>
             <div className='leftimage'>
                <img src={A} alt="" />
             </div>
             <div className='leftimage'>
                <img src={C} alt="" />
             </div>
             <div className='leftimage'>
                <img src={E} alt="" />
             </div>
        </InstaContainer>
    )
}

export default InstaGrid;