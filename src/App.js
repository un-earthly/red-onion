import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.js'
import Checkout from './Pages/Checkout/Checkout.js'
import UserRoute from './Utils/UserRoute.js';
import Home from './Pages/Home/Home.js';
import Error from './Pages/Error.js'
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={
          <UserRoute>
            <Checkout />
          </UserRoute>
        } />

        <Route path='*' element={<Error />} />
      </Routes >
    </div>
  );
}

export default App;
