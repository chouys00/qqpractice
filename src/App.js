import './App.scss';
import {useEffect, Suspense} from 'react';
import {BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import login from './pages/login';
import register from './pages/register';
import page404 from './pages/page404';
import home from './pages/home';
import news from './pages/news';
import routes from './router/index';

function App() {
  useEffect(() =>
      fetch('/api/authentication'), []);
  return(
  // (sessionStorage.getItem('token') ?(
          <div className="App">
            {/*<Switch>*/}
            {/*  <Suspense fallback={<div>123</div>}>*/}
            {/*  {*/}
            {/*    routes.map((route,index)=>{*/}
            {/*      return(*/}
            {/*          <Route path={route.path} key={index}  render={props =>*/}
            {/*              <route.component {...props} routes={route.routes} />*/}
            {/*          }/>*/}
            {/*      )*/}
            {/*    })*/}
            {/*  }*/}
            {/*  </Suspense>*/}
            {/*</Switch>*/}
            <Switch>
              <Route exact path="/login" component={login}/>
              <Route path="/register" component={register}/>
              <Route path="/404" component={page404}/>
              <Route path="/home" component={home}/>
              <Route path="/news" component={news}/>
            </Switch>
          </div>
      // ) : (
      //     <Switch>
      //       <Route path="/login" component={login}/>
      //       <Redirect to='/login' />
      //     </Switch>
      // )
  );
}

export default App;
