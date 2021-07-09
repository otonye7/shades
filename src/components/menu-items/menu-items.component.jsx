import { MenuItemContainer } from './menu-items.styles';
import {useHistory} from 'react-router-dom';
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';


const MenuItems = ({glasses}) => {
    const {title, image, _id} = glasses
    const history = useHistory();

    // let user = window.localStorage.getItem('auth');
    // let userObj = JSON.parse(user);
    // const token = userObj.token;

    // const handleDelete = async ( glassId) => {
    //     if (!window.confirm('Are you sure you want to delete this item ?')) return;
    //       await axios.delete(`http://localhost:8000/api/delete-glasses/${glassId}`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }).then((res) => console.log(res))
      
    // }
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
           </div>
           {/* <button onClick={() => handleDelete(_id)}>Delete</button> */}
           <div className='border'></div>
        </MenuItemContainer>
    )
}

export default MenuItems;