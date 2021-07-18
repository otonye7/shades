import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;

   /* max-width: 1350px; */
.navbar {
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.logo-text {
   padding-left: 1rem;
}

.nav-menu {
  width: 65%;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 0.5rem;
}

.nav-links {
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 400;
  font-size: 16px;
  font-family: Helvetica,"Helvetica Neue",Arial,"Lucida Grande",sans-serif;
  font-weight: 400;
  font-style: normal;
}
 
.fa-code {
  margin-left: 1rem;
}
.nav-item {
  line-height: 40px;
  margin-right: 1rem; 
}
.nav-item:after {
  content: "";
  display: block;
  height: 3px;
  width: 0;
  background: transparent;
  transition: width 0.7s ease, background-color 0.5s ease;
}
.nav-item:hover:after {
  width: 100%;
  background: black;
}
.nav-item .active {
  color: black;
  border: 1px solid black;
}
.nav-icon {
  display: none;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  align-items: center;
}
.icons {
  color: black;
}

.logo-text {
  text-decoration: none;
  color: black;
  font-size: 25px;
  font-weight: 600;
}

.g-icons {
  align-items: center;
  position: relative;
}

.span {
  width: 2%;
  font-size: 20px;
  position: absolute;
  top: 3px;
  background-color: #D8E0DE;
  border-radius: 4px;
  text-align: center;
}

@media screen and (max-width: 967px) {
  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 90%;
    border-top: 1pxsolid #fff;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: -110%;
    position: fixed;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .nav-menu.active {
    background-color: #F2F2F2;
    left: 0px;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
  .nav-item .active {
    color: brown;
    border: none;
  }
  .nav-links {
    padding: 1.5rem;
    width: 100%;
    display: table;
  }
  .nav-icon {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
    z-index: 90;
  }
  
}
`;