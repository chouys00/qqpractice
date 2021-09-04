import './login.scss';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import alert from '../../components/alert/alert'

const Login = () => {

  const submitFuc = () => {
    alert.open()
  };
  return (
      <div className='loginPage'>
        <div className='loginForm'>
          <h1>登入</h1>
          <div className='formItem'>
            <div className='formItem_title'>
              帳號
            </div>
            <input className='formItem_input' type="text"></input>
          </div>
          <div className='formItem'>
            <div className='formItem_title'>
              密碼
            </div>
            <input className='formItem_input' type="text"></input>
          </div>
          <Link to="/register"><span>註冊</span></Link>
          <div>
            <button onClick={submitFuc}>登入</button>
          </div>
        </div>

      </div>
  );

};

export default Login;