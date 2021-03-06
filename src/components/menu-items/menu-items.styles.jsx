import styled from 'styled-components';


export const MenuItemContainer = styled.div`
   width: 100%;
   margin: 0 auto;

   .container {
      /* width: 60%; */
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      align-items: center;
   }

   .image {
       cursor: pointer;
   }

   .title {
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
       font-size: 15px;
   }

   .border {
      border: 0.7px solid black;
      opacity: 0.3;

 @media screen and (max-width: 767px){
     display: none;
  }
   }

   .menu-title {
    @media screen and (max-width: 767px){
    text-align: center;
  }
   }

   img {
       width: 100%;
   }

`;