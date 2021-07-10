import {useState, useEffect} from 'react';
import axios from 'axios';
import AlphaStory from '../alpha-story/alpha-story.component';
import StarRateIcon from '@material-ui/icons/StarRate';
import { BestSellerItemsContainer } from './best-seller-items.styles';





const BestSellerItems = ({match}) => {

    // console.log(match)
    const [glass, setGlass] = useState([]);

    useEffect(() => {
        loadGlass()
    }, [])

    const loadGlass = async () => {
       let res = await axios.get(`http://localhost:8000/api/bestseller/${match.params.id}`)
      setGlass(res.data)
    }

    const {_id,  title, price} = glass;

    console.log(glass)

    return (
        <BestSellerItemsContainer>
            <div className='overall'>
            <div className='container'>
                <div className='image'>
                    <img  src={`http://localhost:8000/api/bestseller/image/${_id}`} alt='' /> 
                </div>
            </div>
           
            <div className='sub'>
                <div className='contents'>
                    <div className='title-price'>
                        <h3 className='title-text'>{title}</h3>
                        <h3 className='title-text'>${price}</h3>
                    </div>
                    <div className='border'></div>
                    <br />
                    <div className='icons'>
                       <StarRateIcon className='star'/> 
                       <StarRateIcon className='star'/> 
                       <StarRateIcon className='star'/> 
                       <StarRateIcon className='star'/> 
                       <StarRateIcon className='star'/> 
                    </div>
                    <br />
                    <div className='description'>
                        <li className='list'> Polarized lenses with 100% UVA/UVB Protection</li>
                        <li className='list'> Acetate and metal frame for a premium look and feel</li>
                        <li className='list'> Flexible frame adaptable to all face shapes</li>
                        <li className='list'>Adjustable nose pads and exquisite screws and hinges</li>
                        <li className='list'> Lightweight with anti-slip technology</li>
                        <li className='list'>Front width: 143 mm; height: 47 mm; weight: 24 g</li>
                        <li className='list'> Premium leather case and microfiber cleaning cloth included</li>
                        <li className='list'>1-year manufacturer warranty</li>
                    </div>
                    <br />
                    <div className='button'>
                        <button className='b-text'>Add To Cart</button>
                    </div>
            </div>
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <AlphaStory />
        </BestSellerItemsContainer>
    )
}

export default BestSellerItems;