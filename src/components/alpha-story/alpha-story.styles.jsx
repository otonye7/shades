import styled from 'styled-components';


export const AlphaContainer = styled.div`
   width: 100%;

   .title {
       text-align: center;
       font-size: 35px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }

   .span {
       width: 60%;
       margin: 0 auto;
       display: flex;
       justify-content: center;

       @media screen and (max-width: 767px){
        width: 100%;
     }
   }

   .text-alpha {
       width: 100%;
       text-align: center;
       font-size: 20px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;

       @media screen and (max-width: 767px){
        width: 100%;
     }
   }

   .faq-text {
       text-align: center;
       font-size: 26px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 500;
       color: #262626;
   }

   .texts {
       text-align: center;
       font-size: 35px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }
`;