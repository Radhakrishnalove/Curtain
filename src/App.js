import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css.map';
import './App.css';
import './style.css';
import './dark-theme.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Product from './Pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     
    <Route path="/" exact={true} element={<Home/>} />
    <Route path="/product-details" exact={true} element={<Product/>} />
    </Routes>

    
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
