// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListView from "./components/ListView/ListView";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { useState } from 'react';


const App = () => {

  // onst [count,setCount]=useState(0);
  const [userData,setUserData]=useState([])


  return (
    <div>
     <BrowserRouter className="browser-router" >
        <Routes>             
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/register" element={<RegistrationForm  userData={userData} setUserData={setUserData}/>}/>
            <Route path="/listview" element={<ListView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
