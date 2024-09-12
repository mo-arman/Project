import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// chunking
// code splitting
// Dynamic Bundling
// lazy Loading this is also know as on demand loading


const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const AppLayout = () => {


  const [userName, setUserName] = useState();

  // Authentication
  useEffect(()=>{
    // Make an Api call and send user and password
    const data = {
      name:"Mohammad Arman",
    }
    setUserName(data.name);
  },[])
  return (
    // <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    // <div className="app">
    // <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
    //   <Header />
    //   </UserContext.Provider>
    //   {/* <Body /> */}
    //  <Outlet/>
    // </div>
    // </UserContext.Provider>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
      <Header />
      {/* <Body /> */}
     <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
// {
//   path:"/",
//   element: <AppLayout/>,
//   children:[

//   ],
//   errorElement:<Error/>
// },
// {
//   path: "/about",
//   element: <About/>
// },
// {
//   path: "/contact",
//   element: <Contact/>
// },
// create the children routes

{
  path:"/",
  element: <AppLayout/>,
  children:[
    {
      path: "/",
      element: <Body/>,
    },
    {
      path: "/about",
      element: <Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>
    },
    {
     path: "/cart",
     element: <Cart/>
    },
  ],
  errorElement:<Error/>
},

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
