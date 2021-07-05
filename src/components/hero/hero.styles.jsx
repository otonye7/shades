import styled from 'styled-components';
import Laura from  '../../assets/laura.jpg'


export const HeroContainer = styled.div`
   width: 100%;
   height: 40rem;

   .background-image {
    width: 100%;
    height: 100%; 
    background-image: url(${Laura});
    background-position: center;
    background-size: cover;
   }
`;