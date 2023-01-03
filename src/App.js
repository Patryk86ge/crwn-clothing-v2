import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from './routes/category-navBar/navBar.components'
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
}

export default App;

