import './App.css';
import Navbar from './Components/Header/Navbar';
import SignIn from './Components/Singup_Singin/SignIn';
import SignUp from './Components/Singup_Singin/SignUp';
import Maincomponent from './Components/Home/Maincomponent';
import { Routes  , Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Maincomponent/>} />
      <Route path='/login' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
    <Footer />
      </>
  );
}

export default App;
