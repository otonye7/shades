import styled from 'styled-components';


export const InstaContainer = styled.div`
   position: relative;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

   @media screen and (max-width: 767px){
    grid-template-columns: 1fr 1fr 1fr;
  }
   
 
   img {
    width: 100%;
    height: auto;
}
`;