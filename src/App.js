import './App.css';
import {useEffect} from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom"
import login from './pages/login/login';
import register from './pages/register/register';
import routes  from './router/index'

function App() {
  useEffect(() =>
      fetch('/api/authentication'), [])

  return (
    <div className="App">
      {/*<Switch>*/}
      {/*  {*/}
      {/*    routes.map((route,index)=>{*/}
      {/*      return(*/}
      {/*          <Route path={route.path} key={index}  component={route.component}></Route>*/}
      {/*          */}
      {/*          <Route path={route.path} key={index}  render={(props) => (*/}
      {/*                <route.component {...props} routes={route.routes} />*/}
      {/*          )}>*/}
      {/*          </Route>*/}
      {/*      )*/}
      {/*    })*/}
      {/*  }*/}
      {/*</Switch>*/}


          <Route exact path="/" component={login} />
          <Route path="/register" component={register}/>
    </div>
  );
}

export default App;
