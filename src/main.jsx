import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
          path: "contact",
          element: <Contact/>,
      },
      {
        path: "Products",
        element: <Product/>,
      },
      {
        path: "SingleProduct",
        element: <singleProduct/>,
      },
      {
        path: "*",
        element: <h1>Not Found!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
  </RouterProvider>
)
