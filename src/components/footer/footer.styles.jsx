import styled from 'styled-components';


export const FooterContainer = styled.div`
   width: 100%;


   .container {
       width: 90%;
       margin: 0 auto;
       display: flex;
       justify-content: space-between;

  @media screen and (max-width: 767px){
          display: flex;
          flex-direction: column;
          justify-content: center;
  
  }
   }

   .icons {
     display: flex;
     justify-content: center;
   }

   .text {
    font-size: 12px;
    font-family: Lato,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #262626;
    line-height: 1.5;

    @media screen and (max-width: 767px){
       font-size: 13px;
       text-align: center;
  }
   }

   .bottom-text {
    font-size: 12px;
    font-family: Lato,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #262626;
    line-height: 1.5;
   }

   .border {
    border: 1px solid black;
    opacity: 0.3;
  }

`;