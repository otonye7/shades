// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import { BestSellerItemsContainer } from './best-seller-items.styles';
// import MenuItems from '../menu-items/menu-items.component';


// const BestSellerItems = (props) => {
//     console.log(props)
//     const [glasses, setGlasses] = useState([]);

//     useEffect(() => {
//         loadGlasses()
//     }, [])

//     const loadGlasses = async () => {
//         let res = await axios.get(`http://localhost:8000/api/bestseller/${glasses._Id}`)
//         setGlasses(res.data)
//     }

//     return (
//         <BestSellerItemsContainer>
//             <div>
//                 {
//                     glasses.map((glasses) => <MenuItems key={glasses._id} glasses={glasses} />)
//                 }
//             </div>
//         </BestSellerItemsContainer>
//     )
// }

// export default BestSellerItems;