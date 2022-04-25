import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cart from "./pages/Cart/Cart";
import Header from "./pages/user/Layouts/Header/Header.js";
import CardItem from "./pages/user/Vounchers";

function App() {
  return (
    <div className="App">
      <Header />
      <Cart />
      <CardItem />
      <Banner />
    </div>
  );
}

export default App;
