
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Contactus from './Components/Contactus';
import Aboutus from './Components/Aboutus';
import ReactDOM from 'react-dom/client';

import {RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import './App.css';
import Packagedetails from './Components/Packagedetails';
import Hoteldetails from './Components/Hoteldetails';

function App() {
  return (
   
    <>
   
   

   <Header/>
   <Outlet/>
   <Footer/>
   

   </>
  
  
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "/Contactus",
        element: <Contactus />
      },
     
      {
        path: "/Aboutus",
        element: <Aboutus />
      },
      {
        path: "/Packagedetails/:id",
        element: <Packagedetails/>
      },
      {
        path: "/Hoteldetails/:id",
        element: <Hoteldetails/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);
  export default App;


