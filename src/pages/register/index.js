import './register.scss';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import verify from './verify.js';
// import alert from '../../common/components/alert/alert'
import eye from '../../assets/icon_eye.png';

const Index = () => {
  const [value, setValue] = useState({
    account: '',
    password: '',
    repassword: '',
  });
  const [error, setError] = useState({});
  const [showText, setShowText] = useState(false);
  const [isSubmit,setIsSubmit] = useState(false)

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setError(verify(value));
    setIsSubmit(true)
  };

  const submitFormData = () => {
    alert('API送出7788');
  }

  useEffect(()=>{

    //無搜集到 error 訊息且 正在送出訊息
    if(Object.keys(error).length === 0 && isSubmit){
      submitFormData()
    }
  },[error])

  return (
      <div className="registerPage">

        <div className="registerForm">
          <h1>註冊</h1>

          {/*帳號*/}
          <div className="formItem">
            <div className="formItem_title">
              帳號
            </div>

            <input className={`formItem_input ${error?.account ?
                'formItem_input-error' :
                ''}`} type="text" name="account"
                   onChange={handleOnChange}>
            </input>

          </div>
          <p className="verifyText">
            {error?.account && (<span>{error.account}</span>)}
          </p>

          {/*密碼*/}
          <div className="formItem">
            <div className="formItem_title">
              密碼
            </div>
            <input className={`formItem_input ${error?.password ?
                'formItem_input-error' :
                ''}`}
                   type={showText ? 'text' : 'password'} name="password"
                   onChange={handleOnChange}>
            </input>
            <div className="formItem_eye" onClick={() => {
              setShowText(!showText);
            }}>
              <img src={eye}></img>
            </div>

          </div>
          <p className="verifyText">
            {error?.password && (<span>{error.password}</span>)}
          </p>

          {/*確認密碼*/}
          <div className="formItem">
            <div className="formItem_title">
              確認密碼
            </div>
            <input className={`formItem_input ${error?.repassword ?
                'formItem_input-error' :
                ''}`}
                   type={showText ? 'text' : 'password'} name="repassword"
                   onChange={handleOnChange}>
            </input>
            <div className="formItem_eye" onClick={() => {
              setShowText(!showText);
            }}>
              <img src={eye}></img>
            </div>

          </div>
          <p className="verifyText">
            {error?.repassword && (<span>{error.repassword}</span>)}
          </p>


          <Link to="/"><span>登入</span></Link>
          <div>
            <button className="formButton" onClick={handleSubmit}>註冊</button>
          </div>
        </div>

      </div>
  );

};

export default Index;