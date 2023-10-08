import './App.css';
import Navbar from './Components/Header/Navbar';
// import SignIn from './Components/Singup_Singin/SignIn';
// import SignUp from './Components/Singup_Singin/SignUp';
import Maincomponent from './Components/Home/Maincomponent';
function App() {
  return (
    <>
      <Navbar />
      <div>
        <Maincomponent />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
      </div>
    </>
  );
}

export default App;
