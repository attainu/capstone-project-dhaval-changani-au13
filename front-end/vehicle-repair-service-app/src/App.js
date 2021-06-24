
import {  useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import PATHS from './config/webPath';
import Home from './containers/Home/Home';
import CustomerProfile from './containers/Profile/CustomerProfile/CustomerProfile';
import MechanicProfile from './containers/Profile/MechanicProfile/MechanicProfile';
import routes from './routes/routes';

function App() {

  const mechanicAuthLogin = useSelector(state => state.mechanicLogin);

  const customerAuthLogin = useSelector(state => state.customerLogin);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            <Route exact path="/">
              {mechanicAuthLogin ? <Redirect to={PATHS.MECHANIC_PROFILE} /> : <Home />}
            </Route>
          {
            mechanicAuthLogin &&  
            <Route exact path={PATHS.MECHANIC_PROFILE} component={MechanicProfile} />
          }
          {
            customerAuthLogin &&
            <Route exact path={PATHS.CUSTOMER_PROFILE} component={CustomerProfile} />
          }

          {((!mechanicAuthLogin && customerAuthLogin) || (!mechanicAuthLogin && !customerAuthLogin)) &&
            <Route exact path={PATHS.HOME} component={Home} />
          }
            {routes.map((route,index) => {
              return (
              <Route key={index} {...route} />
              )
            })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
