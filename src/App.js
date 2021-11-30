
import './App.css';
import Products from './pages/Product';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
     <Home/>
     <ProductList/>
     <Products/>
     <Register/>
     <Login/>
     <Cart/>
    </div>
  );
}

export default App;
