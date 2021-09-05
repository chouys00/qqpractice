import './App.scss';
import {useEffect} from 'react';
import { BrowserRouter, Route,Switch } from "react-router-dom"
import login from './pages/login';
import register from './pages/register';
import page404 from './pages/page404';
import home from './pages/home';
import news from './pages/news';
// import routes  from './router/index'

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
          <Route path="/404" component={page404}/>
          <Route path="/home" component={home}/>
          <Route path="/news" component={news}/>
    </div>
  );
}

export default App;
