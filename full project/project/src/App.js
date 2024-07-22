
import './App.css';
import Cart from './Customer/Components/Cart/Cart';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Nevigation/Nevigation';
import Product from './Customer/Components/Product/Product';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails';
import HomePage from './Customer/Pages/HomePage';


function App() {
  return (
    <div>
<Navigation />
    
    {/* <ProductDetails/> */}
   <Cart/>
   
    <Footer/>
    </div>
  );
}

export default App;
