import React from "react";
import classes from './App.module.css';
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
 import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Root from "./components/Pages/Root";
import Error from "./components/Pages/Error";
import ProductDetails from "./components/Pages/ProductDetails";
const router = createBrowserRouter([
  {
    path:'/', element:<Root/>,
    errorElement:<Error/>,
    children:[
      {index: true,element:<Home/>},  //Here using index:true means Home page will always show respective to /root
      // {path:'/',element:<Home/>},
      {path:'products', element:<Products/>},
      {path:'products/:productId',element:<ProductDetails/>},
    ],
  },
]);

// const routerdefinitions = createRoutesFromElements(
//   <Route>
//    <Route path='/' element={<Home/>}/>
//    <Route path='/products' element={<Products/>}/>
//   </Route>
// );
// const router = createBrowserRouter(routerdefinitions);

function App(){
  return(
   <RouterProvider router={router}/>
  );
};

export default App;