import {useState} from 'react';
import Modal from 'react-modal';
import CartItems from '../cart-items/cart-items.component';
import { ModalContainer } from './modal.styles';
import ClearIcon from '@material-ui/icons/Clear';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root')

const ModalComponent = ({cartItems, totalPrice}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <ModalContainer>
               <Modal 
               isOpen={modalIsOpen}
               onRequestClose={() => setModalIsOpen(false)}
               ariaHideApp={false}
               style={customStyles}
                >
                  <div className='header'>
                     <ClearIcon  onClick={() => setModalIsOpen(false)} className='clear'/>
                 </div> 
                     {
                         cartItems.map((cartItems) => <CartItems key={cartItems._id} cartItems={cartItems} totalPrice={totalPrice}/>)
                     } 
                 </Modal>
                 <button onClick={() => setModalIsOpen(true)}>Click me to open modal</button>
        </ModalContainer>
    )
}

export default ModalComponent