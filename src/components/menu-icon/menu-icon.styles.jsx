import styled from 'styled-components';



export const SubHeaderContainer = styled.div`
width: 100%;
.menu-icon {
    
    /* justify-content: center; */
}
.nav-icons {
    display: none; 
  
@media screen and (max-width: 700px) {
        display: block;
        z-index: 9;
  }
}
.close {
  display: none;
  @media screen and (max-width: 700px) {
        z-index: 100;
  }
  }
  
`;