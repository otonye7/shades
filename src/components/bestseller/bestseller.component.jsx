import { BestSellerContainer } from './bestseller.styles';
import bestSeller from  '../../assets/bestseller.png'

const BestSeller = () => {
    return (
        <BestSellerContainer>
            <div className='background-image'>
                 <img src={bestSeller} alt="" />
            </div>
        </BestSellerContainer>
    )
}

export default BestSeller