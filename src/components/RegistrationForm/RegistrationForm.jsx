// RegistrationForm.js

import  { useState } from 'react';
import { useNavigate } from "react-router-dom";
import  "./RegistrationForm.css";


const RegistrationForm = (props) => {
  

  const navigate=useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [authToken, setAuthToken] = useState('');



//   function handleRegister()
// {
//   let data={name:"iron",email:"ironman@gmail.com",password:"12345678"}
//   console.log(data);
//   fetch("https://arihant-backend.trikaradev.xyz/api/auth/login", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     console.warn("resp",resp);
//     resp.json().then((result)=>{
//       console.log("result",result)
//     })
//   })
// }








  

  function handleRegister(){

    var arryList=props.userData;
    arryList.unshift({username,email,password});
    props.setUserData(arryList);
    localStorage.setItem(`users`,JSON.stringify(props.userData)); 
    alert("Your Data is sucessfuly registered! please login with same Data")
    navigate('/')
   
  }

  return (
    <div className='registration-box'>
      <h2>Registration Form</h2>
      <form >
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        <button className='registerform-btn' onClick={()=>handleRegister()}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;



