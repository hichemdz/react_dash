import './css/app.css';
import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './mycss.css'
// Contaxt
import Data from './data';
// pages
import { Login, Home, Register , Users , Logout} from './pages/'
import Menu from './pages/componant/Menu';
function App() {
  const [token, setToken] = useState('')

  const [auth, setAuth] = useState(null);


  return (
    <div className="App ">
      <Data.Provider value={{ auth, setAuth, token }}>


        <Router>

          <Switch>

             <Route exact path='/' component={Home} />
            <Route  path='/login' component={Login} />:
            <Route  path='/logout' component={Logout} />:
            <Route  path='/register' component={Register} />:
             <Route  path='/users' component={Users} />:
             <Route  path='/menu' component={Menu} />:




          </Switch>
        </Router>
      </Data.Provider>
    </div>
  );
}

export default App;
