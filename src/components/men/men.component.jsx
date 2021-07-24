import { useState, useEffect } from 'react';
import { NewArrivalContainer } from './men.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Kids from '../../assets/mens-banner.png';
import InstaGrid from '../insta-grid/insta-grid.component';

const Men = () => {
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses = async () => {
        let res = await axios.get(`https://sohoquette.herokuapp.com/api/bestseller`)
        setGlasses(res.data)
    }

    return (
        <NewArrivalContainer>
            <div className='background-image'>
                <img src={Kids} alt="" />
            </div>
            <div className='preview'>
                {
                    glasses.filter((glasses) => glasses.number > 29 && glasses.number <= 35).map((glasses) => <Items key={glasses._id} glasses={glasses} />)
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

export default Men