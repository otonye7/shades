import {useState, useEffect} from 'react';
import { NewArrivalContainer } from './sports.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Sport from  '../../assets/sport-banner.png';
import InstaGrid from '../insta-grid/insta-grid.component';

const Sports = () => {
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
                 <img src={Sport} alt="" />
            </div>
             <div  className='preview'>
                  {glasses.map((glasses) => <Items key={glasses._id} glasses={glasses} />) }
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

export default Sports