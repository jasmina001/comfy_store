import {
  About, Cart, Checkout, Orders, Error, HomeLayout,
  Landing, Products, SingleProduct, Login, Register
} from './pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorElement } from './components';

// loaders
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct'; 
import {loader as productsLoader} from './pages/Products'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorElement />, 
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader
      },
      {
        path: 'products',
        element: <Products />,
        errorElement:<ErrorElement/>,
        loader:productsLoader
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader // ✅ yangi nom ishlatilmoqda
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "checkout",
        element: <Checkout />
      },
      {
        path: "orders",
        element: <Orders />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
