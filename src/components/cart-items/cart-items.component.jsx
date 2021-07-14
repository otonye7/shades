import { MenuItemContainer } from './cart-items.styles';
import {useHistory} from 'react-router-dom';
//  import axios from 'axios';
// import { withRouter } from 'react-router-dom';


const CartItems = ({cartItems}) => {
    console.log(cartItems)
    const {title, image, _id, price, quantity} = cartItems
    const history = useHistory();

    return (
        <MenuItemContainer>
        <br />
        <div className='border'></div>
        <br />
        <div className='container'>
           <div onClick={() => history.push(`/bestseller/${_id}`)} className='`menu-items'>
            { 
             image && image.contentType ? (
                <img src={`http://localhost:8000/api/bestseller/image/${_id}`}
                 alt=""
                 className="image"
            /> 
             ) : (
                 null
             )
            
            }
           </div>
           <div className='contents'>
           <h2 className='title-text'>{title}</h2>
                <div className='button-container'>
                <div className='buttons'>
                    <button className='negative-button'>-</button>
                    <button className='quantity-button'>{quantity}</button>
                    <button className='negative-button'>+</button>
                </div>
                <div className='price'>
                    <h2 className='price-text'>${price}</h2>
                </div>
                </div>
               
            </div>
           </div>
        </MenuItemContainer>
    )
}

export default CartItems;




