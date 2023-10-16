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
      </div>
    </>
  );
}

export default App;
// import './App.css';

// import Maincomponent from './Components/Home/Maincomponent';
// import SignIn from './Components/Singup_Singin/SignIn';
// import SignUp from './Components/Singup_Singin/SignUp';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { useState } from 'react';

// function App() {
//   const [user, setLoginUser] = useState({});

//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             {user && user._id ? <Maincomponent /> : <SignIn />}
//           </Route>
//           <Route path="/login">
//             <SignIn setLoginUser={setLoginUser} />
//           </Route>
//           <Route path="/signup">
//             <SignUp />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
