import './App.css';
import {useEffect} from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import login from './pages/login/login';
import register from './pages/register/register';

function App() {
  useEffect(() =>
      fetch('/api/authentication'), [])

  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/" component={login} />
          <Route path="/register" component={register}/>
      </BrowserRouter>
      {/*<header className="App-header">*/}
      {/*  <section className={"App-header"}>*/}
      {/*    <Route path="/" exact component={ login } />*/}
      {/*    <Route path="/works" exact component={ workPage} />*/}
      {/*    <Route path="/workPageDetail" exact component={ workPageDetail} />*/}
      {/*     <Route path="/works/:id" exact component={ workPageDetail} /> */}
      {/*  </section>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
