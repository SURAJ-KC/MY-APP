import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import App from "./App"
import HumanCategory from "./pages/HumanCategory"
import PlantCategory from "./pages/PlantCategory"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import "./index.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/human_category",
        element: <HumanCategory/>
      },
      {
        path: "/plant_category",
        element: <PlantCategory/>
      },
      
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
