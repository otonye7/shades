import styled from 'styled-components';


export const CarouselContainer = styled.div`

.first {
    width: 90%;
    margin: 0 auto;

    @media screen and (max-width: 767px){
          width: 70%;
}
}

.text {
       text-align: center;
       font-size: 30px;
       font-family: Black Jack;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;

       @media screen and (max-width: 767px){
          font-size: 17px;
       }
   }

   .logo-text {
      text-align: center;
       font-size: 25px;
       font-family:  Brush Script Mt;
       font-style: normal;
       font-weight: 400;
       color: #262626;
       line-height: 1.5;
   }

   img {
    width: 100%;
    height: auto;
}
`;