import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/login.component';
import SignUpPage from './pages/sign-up/sign-up.component';

function App() {
  return (
    <div className="App">
          <Switch>
          <Route path={'/login'} component={LoginPage} />
          <Route path={'/signup'} component={SignUpPage} />
          {/* <Route path={'/signup'} component={SignUp} /> */}
			</Switch>
    </div>
  );
}

export default App;
