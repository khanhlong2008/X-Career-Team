import "./App.css";
import CardItem from "./Components/CardItem/CardItem";
import Cart from "./Components/Cart/Cart";
import Header from "./pages/user/Layouts/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <CardItem />
      <Cart />
    </div>
  );
}

export default App;
