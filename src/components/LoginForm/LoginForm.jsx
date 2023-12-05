// LoginForm.js
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import  "./LoginForm.css";


const LoginForm = () => {
  const [loginUserName, setLoginUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  function handleLogin() {
    const allUserData = JSON.parse(localStorage.getItem('users')) || [];

    console.log(allUserData);


    let userFound = false;

    allUserData.forEach((user) => {
      if (user.username === loginUserName && user.password === password) {
        userFound = true;
        navigate('/listview');
      }
    });

    if (!userFound) {
      alert("User Data not found! Please register.");
    }

    console.log('Login clicked:', { loginUserName, password });
  }

  return (
 
      <div className='login-box'>
          <h2>Login Form</h2>
          <div>
            <label>Username:</label>
            <input type="text" value={loginUserName} onChange={(e) => setLoginUserName(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='buttons'>
            <button className="login-btn" onClick={()=>handleLogin()}>Login</button>
            <button className="register-btn" onClick={()=>navigate('/register')}>Register</button>
          </div>
        
      </div>


  )

 
};

export default LoginForm;
