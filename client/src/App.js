import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.js'
import Register from './Pages/Login/Register/Register.js'
import Checkout from './Pages/Checkout/Checkout.js'
import UserRoute from './Utils/UserRoute.js';
import Home from './Pages/Home/Home.js';
import Error from './Pages/Error.js'
import Navbar from './Utils/Navbar.js';
import Footer from './Utils/Footer.js';
import Cart from './Pages/Cart/Cart.js';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={
          <UserRoute>
            <Cart />
          </UserRoute>
        } />
        <Route path='/checkout' element={
          <UserRoute>
            <Checkout />
          </UserRoute>
        } />

        <Route path='*' element={<Error />} />
      </Routes >
      <Footer />
    </div>
  );
}

export default App;
