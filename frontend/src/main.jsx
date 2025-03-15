import React, { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Career from './components/Career/Career.jsx';
import Products from './components/Products/Products.jsx';
import Homes from './components/Home/Homes.jsx';
import Blog from './components/Blog/Blog.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="homes" element={<Homes />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="products" element={<Products />}>
        {/* Child Routes for Products */}
        <Route path="category1" element={<Products />} />

      </Route>
      <Route path="blogs" element={<Blog />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="career" element={<Career />} />
    </Route>
  )
);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
