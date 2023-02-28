import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout"
import Index from "./pages/Index"
import NuevoCliente,{action as NuevoClienteAction} from './pages/NuevoCliente';
import {loader as clientesLoader} from "./pages/Index"
import ErrorPage from './components/ErrorPage';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Index/>,
        loader:clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path:"/clientes/nuevo",
        element:<NuevoCliente/>,
        action:NuevoClienteAction
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
