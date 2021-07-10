import styled from 'styled-components';


export const BestSellerItemsContainer = styled.div`
   width: 100%;

   .overall {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
   }

   .sub {
      width: 100%;
      background-color: #F4F4F4;
   }

   .contents {
      width: 60%;
      margin: 0 auto;
   }

   .title-price {
      /* width: 50%; */
      display: flex;
      justify-content: space-between;
   }

   .b-text {
      width: 100%;
      height: 40px;
      background-color: #5DA133;
      color: white;
      font-size: 17px;
   }

   .star {
      color: #FEC600;
   }

   .title-text {
       font-size: 25px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }

   .border {
      border: 0.7px solid black;
      opacity: 0.3;
   }


   .list {
      font-size: 14px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }
`;