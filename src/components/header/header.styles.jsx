import styled from 'styled-components';


export const HeaderContainer = styled.div`
   width: 100%;
   /* position: fixed; */
   z-index: 1;


   .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
   }
  

  .logo-container {
      width: 15%;
      display: flex;
      justify-content: space-between;
      align-items: center; 
  }

  .nav-links {
      display: flex;
      width: 65%;
      justify-content: space-between;
  }

  .nav-text {
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: Lato,sans-serif;
    font-style: normal;
  }

  .header-icons {
      display: flex;
      justify-content: space-between;
      width: 8%;
      align-content: center;
      align-items: center;
  }

  .personicons {
    color: black;
  }

  .border-bottom {
    border: 1px solid black;
    opacity: 0.1;
  }

  .samo-text {
    text-decoration: none;
    font-size: 22px;
    font-weight: 600;
    color: black;
  }
`;