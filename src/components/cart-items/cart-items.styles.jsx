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
       align-items: center;
   }

   .d-text {
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
       font-size: 17px;  
   }

   .title-text {
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 600;
       line-height: 1.2;
       font-size: 20px;
   }

   .button-container {
       display: flex;
       align-items: center;
   }

   .price-text {
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
       font-size: 19px;
       padding-left: 1rem;
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

   .s-text {
       text-align: center;
       font-size: 18px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
   }

   .subtotal {
       font-size: 18px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 600;
       line-height: 1.2;
   }

   .shipping-text {
       text-align: center;
       font-size: 18px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
   }

   .ship-container {
       display: flex;
       justify-content: space-between;
   }

   .subtotal-container {
       display: flex;
       justify-content: space-between;
   }

   img {
       width: 100%;
   }

`;