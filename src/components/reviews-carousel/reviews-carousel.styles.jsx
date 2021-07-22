import styled from 'styled-components';


export const CardsContainer = styled.div`
   width: 100%;

   .container {
       width: 100%;
       display: flex;
       justify-content: space-between;

   @media screen and (max-width: 767px){
     flex-direction: column;
    }
   }

   .root {
       width: 20%;

@media screen and (max-width: 767px){
     width: 100%;
  }
   }
   .root-two {
       width: 20%;

@media screen and (max-width: 767px){
     width: 100%;
  }
   }
   .root-three {
       width: 20%;

 @media screen and (max-width: 767px){
     width: 100%;
  }
   }
   .root-four {
       width: 20%;

 @media screen and (max-width: 767px){
     width: 100%;
  }
   }


   img {
       width: 100%;
       height: auto;
   }
`;