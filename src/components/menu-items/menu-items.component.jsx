import { MenuItemContainer } from './menu-items.styles';
import { withRouter } from 'react-router-dom';


const MenuItems = ({glasses}) => {
    return (
        <MenuItemContainer>
           <div className='`menu-items'>

           </div>

           <div className='menu-title'>
               <h2 className='title'>{glasses.title}</h2>
           </div>
        </MenuItemContainer>
    )
}

export default MenuItems;