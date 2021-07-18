import { MenuItemContainer } from './cart-items.styles';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
//  import axios from 'axios';
// import { withRouter } from 'react-router-dom';


const CartItems = ({ cartItems }) => {
    const { title, image, _id, price, quantity, description } = cartItems
    const history = useHistory();

    const { cart } = useSelector((state) => ({ ...state }));


    const totalPrice = () => {
        return cart.cartItems.reduce((accumulatedPrice, cartItems) => accumulatedPrice + cartItems.quantity * cartItems.price, 0)
    }



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
                    <h2 className='d-text'>{description}</h2>
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
            <div className='price'>
                <div className='shipping'>
                    <h6 className='s-text'>Free shipping applied</h6>
                </div>
                <br />
                <div className='ship-container'>
                    <h5 className='shipping-text'>Shipping</h5>
                    <h5 className='shipping-text'>Free</h5>
                </div>
                <div className='subtotal-container'>
                    <h2 className='subtotal'>Subtotal</h2>
                    <span className='price-text'>${totalPrice()}</span>
                </div>
            </div>
        </MenuItemContainer>
    )
}

export default CartItems;




