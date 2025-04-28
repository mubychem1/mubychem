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
import Pharmaceuticals from './components/Products/Pharmaceuticals.jsx';
// import Homes from './components/Home/Homes.jsx';
import Blog from './components/Blog/Blog.jsx';
import Page1 from './components/Blog/Page1.jsx';
import PharmaceuticalsDes from './components/Products/PharmaceuticalsDes.jsx';
import CgmpManufacturing from './components/AboutUs/CgmpManufacturing.jsx';
import ResearchAndDevelopment from './components/AboutUs/ResearchAndDevelopment.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="/about-us/manufacturingOverview" element={<CgmpManufacturing />} />
      <Route path="/about-us/research-development" element={<ResearchAndDevelopment />} />
      {/* <Route path="pharmaceuticals" element={<Pharmaceuticals />}>
        {/* Child Routes for Products */}
      {/* <Route path="category1" element={<Pharmaceuticals />} />
      </Route> */}
      <Route path="allproducts" element={<Pharmaceuticals />} />
      {/* <Route path="products" element={<Products />} />
      <Route path="products/sucoferric-oxyhydroxide" element={<Simple />} />*/}
      <Route path="blogs" element={<Blog />} />
      <Route path="Page1" element={<Page1 />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="career" element={<Career />} />
      {/* <Route path="simple" element={<Simple />} /> */}
      <Route path="PharmaceuticalsDes/:id" element={<PharmaceuticalsDes />} />
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
