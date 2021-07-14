import styled from 'styled-components';


export const MenuItemContainer = styled.div`
   width: 100%;
   margin: 0 auto;

   .border {
      width: 100%;
      border: 0.7px solid black;
      opacity: 0.3;
   }
 
   .container {
      display: flex;
   }

   .title-text {
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 600;
       line-height: 1.2;
       font-size: 20px;
   }

   .price {
       padding-top: 5px;
   }

   .price-text {
    font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
       font-size: 19px;
   }

   .buttons {
       padding-top: 5px;
       align-items: center;
   }

   .contents {
       width: 70%;
       align-items: center;
   }

   .button-container {
       display: flex;
       justify-content: space-between;
       align-content: center;
   }

   .quantity-button {
       width: 30px;
       height: 30px;
       border: 0.7px solid black;
       opacity: 0.4;
       font-size: 15px;
       color: black;
       font-weight:600;
   }

   .negative-button {
       width: 30px;
       height: 30px;
       border: 0.7px solid black;
       opacity: 0.4;
       font-size: 15px;
       color: black;
       font-weight:600;
   }

   img {
       width: 30%;
   }

`;