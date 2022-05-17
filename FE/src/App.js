
import './App.css';
import Header from './pages/user/Layouts/Header/Header.js';
import SignInSide from './pages/user/Login/index.js';
import SignUp from './pages/user/Signup/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from './pages/user/CheckOut/CheckOut';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import testtData from './pages/user/CheckOut/testtData.json'
function App() {
  
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
      <div className="App">
          {/*  <SignInSide/> <Header />
            <Routes>             
              <Route path = 'signin' exact element = {<SignInSide/>}/>
              <Route path = 'signup' element = {<SignUp/>}/>
            </Routes>
            */}


        <Router>
          <Routes>
            <Route path='/' element={<><CheckOut cart={testtData} /></>} />
          </Routes>
        </Router>

      </div>
    </PayPalScriptProvider>
  );
}

export default App;
