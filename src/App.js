import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import HomePage from './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Footer from '../src/components/footer/footer.component';
import BestSeller from '../src/components/bestseller/bestseller.component';
import PostForm from '../src/components/post-form/post-form.component';
import NewArrivalForm from '../src/components/new-arrival-form/new-arrival-form.component';
import BestSellerItem from '../src/components/best-seller-items/best-seller-items.component';
import NewArrival from '../src/components/newarrival/newarrival.component';
import SunGlasses from '../src/components/sun-glasses/sun-glasses.component';
import Sports from '../src/components/sports/sports.component';
import BlueLights from '../src/components/blue-lights/blue-lights.component';
import Accessories from '../src/components/accessories/accessories.component';
import Sales from '../src/components/sales/sales.component';
import Men from '../src/components/men/men.component';
import Women from '../src/components/women/women.component';

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
        <Route path={'/new-arrival-form'} component={NewArrivalForm} />
        <Route exact path={'/new-arrival'} component={NewArrival} />
        <Route exact path={'/sun-glasses'} component={SunGlasses} />
        <Route exact path={'/sports'} component={Sports} />
        <Route exact path={'/blue-lights'} component={BlueLights} />
        <Route exact path={'/accessories'} component={Accessories} />
        <Route exact path={'/sales'} component={Sales} />
        <Route exact path={'/men'} component={Men} />
        <Route exact path={'/women'} component={Women} />
      </Switch>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
