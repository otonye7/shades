import {useEffect} from 'react';
import axios from 'axios';
import { BestSellerContainer } from './bestseller.styles';
import bestSeller from  '../../assets/bestseller.png'

const BestSeller = () => {
    let res = axios.get(`http://localhost:8000/api/bestseller`)
    console.log(res)
    return (
        <BestSellerContainer>
            <div className='background-image'>
                 <img src={bestSeller} alt="" />
            </div>
        </BestSellerContainer>
    )
}

export default BestSeller