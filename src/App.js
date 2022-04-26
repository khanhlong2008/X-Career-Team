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
import Checkout from "./pages/user/Checkout/index";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
function App() {
  //Check login admin
  var LogAdmin = false;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/admin/:path?"} exact>
            <Admin>
              <Switch>
                <Route path={"/admin"} exact component={LoginAdmin}></Route>

                <Route exact path={"/admin/dashboard"}>
                  {/* {LogAdmin == false ? (
                    <Redirect to="/admin"></Redirect>
                  ) : (
                    <Dashboard />
                  )} */}
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
                <Route path="/thanhtoan" component={Checkout}></Route>
                <Route path="/voucher:vouchername" component={Voucher}></Route>
              </Switch>
            </User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
