import { useState } from 'react';
import Modal from 'react-modal';
import CartItems from '../cart-items/cart-items.component';
import { ModalContainer } from './modal.styles';
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';


const customStyles = {
    content: {
        width: '60%',
        marginTop: '5%'
    },
};

Modal.setAppElement('#root')

const ModalComponent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { cart } = useSelector((state) => ({ ...state }));
    console.log(cart)

    return (
        <ModalContainer>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
                style={customStyles}
            >
                <div className='header'>
                    <ClearIcon onClick={() => setModalIsOpen(false)} className='clear' />
                </div>
                {
                    cart.cartItems.map((cartItems) => <CartItems key={cartItems._id} cartItems={cartItems} />)
                }
            </Modal>
            <LocalGroceryStoreIcon onClick={() => setModalIsOpen(true)} />
        </ModalContainer>
    )
}

export default ModalComponent