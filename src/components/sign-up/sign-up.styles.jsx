import styled from 'styled-components';


export const LoginContainer = styled.div`
   width: 100%;



   .container {
       width: 50%;
       align-content: center;
       margin: 0 auto;

       @media screen and (max-width: 767px){
     width: 100%;
     }
   }

   .login-text {
       text-align: center;
       font-family: Lato,sans-serif;
       font-style: normal;
       font-weight: 700;
       line-height: 1.2;
   }

   .form-container {
       width:100%;
       display: flex;
       flex-direction: column;
   }

   .forgot-password-text {
    font-size: 14px;
    text-align: center;
    font-family: Lato,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #262626;
    line-height: 1.5;
   }

  .btn {
      display: flex;
      justify-content: center;
  }
`;