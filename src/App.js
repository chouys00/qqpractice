import './App.scss';
import {useEffect, Suspense} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import login from './pages/login';
import register from './pages/register';
import page404 from './pages/page404';
import home from './pages/home';
import news from './pages/news';
import routes from './router/index';

function App() {
  useEffect(() =>
      fetch('/api/authentication'), []);
  return (

      <div className="App">
        <Switch>
          <Suspense fallback={<div>123</div>}>
          {
            routes.map((route,index)=>{
              return(
                  <Route path={route.path} key={index}  render={props =>
                      <route.component {...props} routes={route.routes} />
                  }/>
              )
            })
          }
          </Suspense>
        </Switch>


        {/*<Switch>*/}
        {/*  <Route exact path="/login" component={login}/>*/}
        {/*  <Route exact path="/register" component={register}/>*/}
        {/*  <Route exact path="/news" component={news}/>*/}
        {/*  <Route exact path="/home" component={home}/>*/}
        {/*  <Redirect exact from="/" to="/home" component={home}/>*/}
        {/*  <Route component={page404}/>*/}
        {/*</Switch>*/}

        {/*{*/}
        {/*  sessionStorage.getItem('token')?*/}
        {/*      (  <Switch>*/}
        {/*        <Route exact path="/login" component={login}/>*/}
        {/*        <Route exact path="/register" component={register}/>*/}
        {/*        <Route exact path="/news" component={news}/>*/}
        {/*        <Route exact path="/home" component={home}/>*/}
        {/*        <Redirect exact from="/" to="/home" component={home}/>*/}
        {/*        <Route component={page404}/>*/}
        {/*      </Switch>)*/}
        {/*      :*/}
        {/*      (*/}
        {/*          <Switch>*/}
        {/*            <Route exact path="/login" component={login}/>*/}
        {/*            <Route exact path="/register" component={register}/>*/}
        {/*            <Redirect exact from="/" to="/login" component={home}/>*/}
        {/*          </Switch>*/}
        {/*      )*/}

        {/*}*/}

      </div>
  );
}

export default App;
