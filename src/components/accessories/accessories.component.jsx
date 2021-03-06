import {useState, useEffect} from 'react';
import { NewArrivalContainer } from './accessories.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Newarrival from  '../../assets/accessories-banner.png';
import InstaGrid from '../insta-grid/insta-grid.component';

const Accessories = () => {
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses =  async () => {
        let res = await axios.get(`http://localhost:8000/api/bestseller`)
        console.log(res)
        setGlasses(res.data)
    }

    // console.log(glasses)
    return (
        <NewArrivalContainer>
             <div className='background-image'>
                 <img src={Newarrival} alt="" />
            </div>
             <div  className='preview'>
             {
                  glasses.filter((glasses) => glasses.number > 18 && glasses.number <= 24).map((glasses) => <Items key={glasses._id} glasses={glasses} />) 
                }
            </div>  
            <br />
            <br />
            <div className='other'>
                <h2 className='text'>How Others Wear It</h2>
                <br />
                <InstaGrid />
            </div>
        </NewArrivalContainer>
    )
}

export default Accessories;