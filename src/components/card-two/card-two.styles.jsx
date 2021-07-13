import styled from 'styled-components';


export const CardContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 15px;

   @media screen and (max-width: 767px){
    grid-template-columns: 1fr;
  }

   .link-text {
       text-align: center;
   }

   .links {
       margin: 0 auto;
       display: flex;
       justify-content: center;
   }
 
   img {
    width: 100%;
    height: auto;
}
`;