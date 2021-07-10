import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import HomePage from  './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Footer from '../src/components/footer/footer.component';
import BestSeller from '../src/components/bestseller/bestseller.component';
import PostForm from '../src/components/post-form/post-form.component';
import BestSellerItem from '../src/components/best-seller-items/best-seller-items.component';

function App() {
  return (
    <div className="App">
       <Header />
          <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignUpPage} />
          <Route exact path={'/bestseller'} component={BestSeller} /> 
          <Route path={'/bestseller/:id'} component={BestSellerItem} /> 
          <Route path={'/post-form'} component={PostForm} /> 
			</Switch>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
