import './App.css';
import Navbar from './Components/Header/Navbar';
import SignIn from './Components/Singup_Singin/SignIn';
import SignUp from './Components/Singup_Singin/SignUp';
import { useState } from 'react';
import Maincomponent from './Components/Home/Maincomponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  const [user, setLoginUser] = useState({});

  return (

      <>
        <Navbar />
        <Routes>
          <Route path="/home" element={user && user._id ? <Maincomponent /> : <SignIn setLoginUser={setLoginUser} />} />
          <Route path="/" element={<SignIn setLoginUser={setLoginUser} />} />
          <Route path="/Login" element={<SignIn setLoginUser={setLoginUser} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </>

  );
}

export default App;
