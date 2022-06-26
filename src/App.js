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
import LoginAdmin from "./pages/admin/Login";
import Blog from "./pages/user/Blog/index";
import CheckOut from "./pages/user/CheckOut/CheckOut";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import SignIn from "./pages/user/Login/index";
import SignUp from "./pages/user/Signup/Signup";
import Detail from "./pages/user/Vounchers/Detail/detail";
import userProfile from "./pages/user/UserProfile/UserProfile"
import Cart from "./pages/user/Cart/Cart"
import ArticleLayout from "./pages/user/Ariticles/Index";


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
                <Route path="/baiviet/:postid" component={Ariticles}></Route>
                <Route path="/payment" component={CheckOut}></Route>
                <Route path="/vouchers/:slug" component={Detail}></Route>
                <Route path="/login" component={SignIn}></Route>
                <Route path="/register" component={SignUp}></Route>
                <Route path="/userProfile" component={userProfile}></Route>
                <Route path = "/cart" component={Cart}></Route>
                <Route path = "/article" component={ArticleLayout}></Route>
              </Switch>
            </User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
