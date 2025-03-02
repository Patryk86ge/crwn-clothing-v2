import {Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from 'react-redux';

import Home from "./routes/home/home.component";
import NavBar from './routes/category-navBar/navBar.components'
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import {checkUserSession} from './store/user/user.action'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
