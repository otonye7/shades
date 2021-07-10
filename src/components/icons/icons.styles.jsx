import styled from 'styled-components';


export const IconsContainer = styled.div`
   width: 100%;

   .container {
       width: 76%;
       margin: 0 auto;
       display:grid;
       padding-left: 10rem;
       grid-template-columns: 1fr 1fr 1fr 1fr;
       justify-content: center;
   }

   .first-container {
      padding-bottom: 4rem;
   }

   .text {
       /* text-align: center; */
       font-size: 15px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }

   img {
       width: 30%;

   }
`;