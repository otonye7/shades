import {useState, useEffect} from 'react';
import axios from 'axios';
import MenuItems from '../menu-items/menu-items.component';
import { BestSellerContainer } from './bestseller.styles';
import bestSeller from  '../../assets/bestseller.png';
import InstaGrid from '../insta-grid/insta-grid.component';


const BestSeller = () => {

    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses = async () => {
        let res = await axios.get(`http://localhost:8000/api/bestseller`)
        // console.log(res)
        setGlasses(res.data)
    }

    // console.log(glasses)



    

    return (
        <BestSellerContainer>
            <div className='background-image'>
                 <img src={bestSeller} alt="" />
            </div>
            <br />
            <br />
            <div className='preview'>
                {
                    glasses.filter((glasses) => glasses.number <= 9).map((glasses) => <MenuItems key={glasses._id} glasses={glasses} />)
                }
            </div>
            <br />
            <br />
            <div className='other'>
                <h2 className='text'>How Others Wear It</h2>
                <br />
                <InstaGrid />
            </div>
        </BestSellerContainer>
    )
}

export default BestSeller