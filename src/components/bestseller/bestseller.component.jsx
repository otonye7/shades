import {useState, useEffect} from 'react';
import axios from 'axios';
import MenuItems from '../menu-items/menu-items.component';
import { BestSellerContainer } from './bestseller.styles';
import bestSeller from  '../../assets/bestseller.png';


const BestSeller = () => {

    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses = async () => {
        let res = await axios.get(`http://localhost:8000/api/bestseller`)
        setGlasses(res.data)
    }


    return (
        <BestSellerContainer>
            <div className='background-image'>
                 <img src={bestSeller} alt="" />
            </div>
            <br />
            <br />
            <div className='preview'>
                {
                    glasses.map((glasses) => <MenuItems key={glasses._id} glasses={glasses}/>)
                }
            </div>
        </BestSellerContainer>
    )
}

export default BestSeller