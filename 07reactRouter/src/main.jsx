import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/aboutus/Aboutus";
import Contact from "./components/contactus/Contactus";
import User from "./components/user/User";
import Github , {githubInfoLoader} from "./components/github/Github";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'/About',
//         element:<About/>
//       }
//       ,
//       {
//         path:'/Contact',
//         element:<Contact/>
//       }
//     ]
//   },
//   // { //if i write like this then it render only that part which i will pass in element property to layout , but when i need main element and its child then i need to to do work according to that.
//   //       path:'',
//   //       element:<Home />
//   // },
//   // {
//   //       path:'/About',
//   //       element:<About/>
//   // }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader}  path="github" element={<Github />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
