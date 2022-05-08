import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./pages/user";
import Admin from "./pages/admin";
import Home from "./pages/user/Home/Home";
import Contacts from "./pages/user/Contacts";
import Ariticles from "./pages/user/Ariticles/Detail";
import Voucher from "./pages/user/Vounchers/Detail/index";
import LoginAdmin from "./pages/admin/Login";
import Blog from "./pages/user/Blog/index";
import CheckOut from "./pages/user/CheckOut/CheckOut";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import SignIn from "./pages/user/Login/index";
import SignUp from "./pages/user/Signup/Signup";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/admin/:path?"} exact>
            <Admin>
              <Switch>
                <Route path={"/admin"} exact component={LoginAdmin}></Route>

                <Route exact path={"/admin/dashboard"}>
                  <Dashboard />
                </Route>
              </Switch>
            </Admin>
          </Route>

          <Route>
            <User>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/lienhe" component={Contacts}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/baiviet:postid" component={Ariticles}></Route>
                <Route path="/payment" component={CheckOut}></Route>
                <Route path="/voucher:vouchername" component={Voucher}></Route>
                <Route path="/login" component={SignIn}></Route>
                <Route path="/register" component={SignUp}></Route>
                <Route path=""></Route>
              </Switch>
            </User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;