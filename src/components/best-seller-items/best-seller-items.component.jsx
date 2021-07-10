import {useState, useEffect} from 'react';
import axios from 'axios';
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

    console.log(glass)

    return (
        <BestSellerItemsContainer>
            <div>
            {
                glass.title
            }
            </div>
        </BestSellerItemsContainer>
    )
}

export default BestSellerItems;