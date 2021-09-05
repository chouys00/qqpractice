import './register.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  const submitFuc = () => {

  };
  return (
      <div className='registerPage'>
        <div className='registerForm'>
          <h1>註冊</h1>
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
          <div className='formItem'>
            <div className='formItem_title'>
              確認密碼
            </div>
            <input className='formItem_input' type="text"></input>
          </div>
          <div className='verification'>

          </div>
          <Link to="/"><span>返回登入</span></Link>
          <div>
            <button onClick={submitFuc}>註冊</button>
          </div>
        </div>

      </div>
  );

};

export default Register;