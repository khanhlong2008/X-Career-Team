
import './App.css';
import Header from './pages/user/Layouts/Header/Header.js'
import SignInSide from './pages/user/Login/index.js'
import SignUp from './pages/user/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Header /> <SignInSide/> <SignUp/>
      */}
     <SignInSide/>
    </div>
  );
}

export default App;
