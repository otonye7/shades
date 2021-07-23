import { MenuItemContainer } from './items.styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


const Items = ({ glasses, addItem }) => {
    const { title, image, _id, price } = glasses
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
            </div>
            {/* <button onClick={() => handleDelete(_id)}>Delete</button>  */}
            <div className='button'>
                <button onClick={() => addItem(glasses)} className='b-text'>Add To Cart</button>
            </div>
        </MenuItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: glasses => dispatch(addItem(glasses))
})

export default connect(null, mapDispatchToProps)(Items);