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

   .button {
       display: flex;
       justify-content: center;
   }
   
   .b-text {
      width: 80%;
      height: 40px;
      background-color: black;
      color: white;
      font-size: 17px;
   }

   img {
       width: 100%;
   }

`;