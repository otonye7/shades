import { useState, useEffect } from 'react';
import { NewArrivalContainer } from './newarrival.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Newarrival from '../../assets/newarrival.png';
import InstaGrid from '../insta-grid/insta-grid.component';
import Modal from '../modal/modal.component';


const NewArrival = () => {
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
                <img src={Newarrival} alt="" />
            </div>
            <div className='preview'>
                {
                    glasses.filter((glasses) => glasses.number > 10 && glasses.number <= 22).map((glasses) => <Items
                        key={glasses._id}
                        glasses={glasses}
                    />
                    )
                }
            </div>
            <br />
            <br />
            <div className='other'>
                <h2 className='text'>How Others Wear It</h2>
                <br />
                <Modal />
                <InstaGrid />
            </div>
        </NewArrivalContainer>
    )
}

export default NewArrival