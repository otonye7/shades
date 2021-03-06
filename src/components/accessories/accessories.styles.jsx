import styled from 'styled-components';


export const NewArrivalContainer = styled.div`
   width: 100%;

   .background-image {
    width: 100%;
    height: 100%; 
   }

   .preview {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      @media screen and (max-width: 767px){
        grid-template-columns: 1fr;
     }
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