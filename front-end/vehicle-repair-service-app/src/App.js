
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import routes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
            {routes.map((route,index) => {
              return <Route key={index} {...route} />
            })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
