import {useState, useEffect} from 'react';
import { NewArrivalContainer } from './newarrival.styles';
import axios from 'axios';
import Items from '../items/items.component';
import Newarrival from  '../../assets/newarrival.png';
import InstaGrid from '../insta-grid/insta-grid.component';

const NewArrival = () => {

    const [glasses, setGlasses] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadGlasses()
    }, [])

    const loadGlasses =  async () => {
        let res = await axios.get(`http://localhost:8000/api/bestseller`)
        console.log(res)
        setGlasses(res.data)
    }

    const addToCart = (cartItemToAdd) => {
       const existingItems = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);
        if (existingItems) {
            return cartItems.map(cartItem => cartItem._id === cartItemToAdd._id 
            ?
            setCartItems({...cartItem, quantity: cartItem.quantity + 1})
            :
           setCartItems(cartItem)
            )
        }
        return setCartItems([...cartItems, {...cartItemToAdd, quantity: 1}])
    }




    return (
        <NewArrivalContainer>
             <div className='background-image'>
                 <img src={Newarrival} alt="" />
            </div>
             <div  className='preview'>
                 {
                  glasses.filter((glasses) => glasses.number > 10 && glasses.number <= 22).map((glasses) => <Items key={glasses._id} glasses={glasses} addToCart={addToCart}/>) 
                }
            </div>  
            <br />
            <br />
            <div className='other'>
                <h2 className='text'>How Others Wear It</h2>
                <pre>{JSON.stringify(cartItems)}</pre>
                {/* {cartItems} */}
                <br />
                <InstaGrid />
            </div>
        </NewArrivalContainer>
    )
}

export default NewArrival