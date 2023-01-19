import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from './routes/category-navBar/navBar.components'
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component"

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  );
}

export default App;

