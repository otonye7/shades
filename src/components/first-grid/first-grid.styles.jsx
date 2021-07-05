import styled from 'styled-components';


export const FirstGridContainer = styled.div`
   position: relative;
   width: 100%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 15px;

   .text {
       text-align: center;
       color: white;
       font-size: 45px;
       font-weight: 400;
   }
   
   .container {
       position: absolute;
       width: 49%;
       bottom: 0;
       margin: 0 auto;
       /* padding-left: 30px; */
       padding-bottom: 40px;
       display: flex;
       flex-direction: column;
       justify-content: center;
   }

   .btn {
       height:44px;
       width: 25%;
       color: white;
       font-size: 20px;
       font-weight: 400;
       background-color: transparent;
       border: 4px solid white;
       margin: 0 auto;
   }

   
 
   img {
    width: 100%;
    height: auto;
}
`;