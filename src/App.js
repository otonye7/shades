import { Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/header.component';
import HomePage from  './pages/home/home.component';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';
import Footer from '../src/components/footer/footer.component';

function App() {
  return (
    <div className="App">
       <Header />
       <br />
       <br />
          <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignUpPage} />
          {/* <Route path={'/signup'} component={SignUp} /> */}
			</Switch>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
