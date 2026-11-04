import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductCardList from './components/ProductCardList'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <ProductCardList/>
      <Footer />
    </div>
  );
}

export default App;