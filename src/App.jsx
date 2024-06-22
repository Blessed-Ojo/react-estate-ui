import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './routes/homepage/homepage';
import ListPage from './routes/listpage/ListPage';
import Layout from './routes/layout/Layout';
import Singlepage from "./routes/singlepage/Singlepage";
import Login from "./routes/login/Login";

 



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<Singlepage/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
  
}

export default App