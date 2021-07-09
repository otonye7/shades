import styled from 'styled-components';


export const BestSellerContainer = styled.div`
   width: 100%;
 
   .background-image {
    width: 100%;
    height: 100%; 
   }

   .preview {
      width: 70%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
   }

   .text {
       text-align: center;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       line-height: 1.2;
       font-size: 35px;
   }

   img {
    width: 100%;
    height: auto;
}

`;