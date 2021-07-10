import styled from 'styled-components';


export const FaqContainer = styled.div`
   width: 70%;
   margin: 0 auto;


   .overall {
       width:70%;
       flex-direction: row;
       margin: 0 auto;
   }

   .arrow {
       cursor: pointer;
   }

   .icon {
       display: flex;
       justify-content: space-between;
   }

   .text {
       font-size: 22px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 500;
       color: #262626;
       line-height: 1.5;
   }

   .border {
      border: 0.7px solid black;
      opacity: 0.3;
   }

`;