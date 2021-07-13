import styled from 'styled-components';


export const FirstGridContainer = styled.div`
   position: relative;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 15px;
   padding-top: 2rem;

   @media screen and (max-width: 767px){
    grid-template-columns: 1fr;
  }

  .container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
   }

   .vision {
       display: flex;
       align-items: center;
       justify-content: center;
   }

   .title {
       text-align: center; 
       font-size: 35px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 500;
       color: #262626;
       line-height: 1.5;
   }

   .text {
       font-size: 14px;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
       margin-left: 0.3rem;
   }

   .btn {
       height:44px;
       width: 50%;
       color: black;
       font-size: 20px;
       font-weight: 400;
       background-color: transparent;
       border: 3px solid black;
       margin: 0 auto;
   }

   img {
    width: 100%;
    height: auto;
}
`;