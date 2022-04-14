import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.js'
import Checkout from './Pages/Checkout/Checkout.js'
import UserRoute from './Utils/UserRoute.js';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={
          <UserRoute>
            <Checkout />
          </UserRoute>
        } />
      </Routes >
    </div>
  );
}

export default App;
