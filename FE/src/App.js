
import './App.css';
import Header from './pages/user/Layouts/Header/Header.js';
import SignInSide from './pages/user/Login/index.js';
import SignUp from './pages/user/Signup/Signup';
import {Routes,Route} from 'react-router-dom';
import CheckOut from './pages/user/CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      {/*  <SignInSide/> <Header />
     <Routes>
      
      <Route path = 'signin' exact element = {<SignInSide/>}/>
      <Route path = 'signup' element = {<SignUp/>}/>
      
       
     </Routes>
      */}
    <CheckOut/>
    </div>
  );
}

export default App;
