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

           <div className='menu-title'>
               <h5 className='title'>{title}</h5>
           </div>
           <div className='menu-title'>
               <h5 className='title'>${price}</h5>
           </div>
           <div className='menu-title'>
               <h5 className='title'>${quantity}</h5>
           </div>
           </div>
        </MenuItemContainer>
    )
}

export default CartItems;