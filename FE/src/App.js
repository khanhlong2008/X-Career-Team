
import './App.css';
import Header from './pages/user/Layouts/Header/Header.js';
import SignInSide from './pages/user/Login/index.js';
import SignUp from './pages/user/Signup/Signup';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Header /> <SignInSide/> 
      */}
     <Routes>
      
      <Route path = 'signin' exact element = {<SignInSide/>}/>
      <Route path = 'signup' element = {<SignUp/>}/>
      
       
     </Routes>
    </div>
  );
}

export default App;
