import styled from 'styled-components';


export const LoginContainer = styled.div`
   width: 100%;
   padding-top: 5rem;



   .container {
       width: 100%;
       align-content: center;
       margin: 0 auto;
   }

   .login-text {
       text-align: center;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 700;
       line-height: 1.2;
   }

   .login-form {
       display: flex;
       justify-content: center;
       width: 40%;
       margin: 0 auto;

    @media screen and (max-width: 767px){
     width: 100%;
    }
   }

`;