import styled from 'styled-components';


export const MailFormContainer = styled.div`
   width: 100%;
   max-width: 1350px;
   display: flex;
   justify-content: center;


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
    text-decoration: none;
   }

   .account-link {
       display: flex;
       justify-content: center;
   }

  .btns {
      display: flex;
      justify-content: center;
  }
`;