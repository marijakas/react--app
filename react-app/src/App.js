 
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/pages/LogIn';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path = '/' exact component={Home}/>
      <Route path ='/services' component={Services} />
      <Route path ='/products' component={Products} />
      <Route path ='/sign-up' component={SignUp} />
      <Route path ='/log-in' component={LogIn} />
    </Switch>
    </Router>

     </>
  );
}

export default App;
