import { useState, useEffect } from 'react';
import { NewArrivalContainer } from './sun-glasses.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Kids from '../../assets/kids.png';
import InstaGrid from '../insta-grid/insta-grid.component';

const SunGlasses = () => {
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses = async () => {
        let res = await axios.get(`http://localhost:8000/api/bestseller`)
        setGlasses(res.data)
    }

    return (
        <NewArrivalContainer>
            <div className='background-image'>
                <img src={Kids} alt="" />
            </div>
            <div className='preview'>
                {
                    glasses.filter((glasses) => glasses.number > 20 && glasses.number <= 28).map((glasses) => <Items key={glasses._id} glasses={glasses} />)
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

export default SunGlasses