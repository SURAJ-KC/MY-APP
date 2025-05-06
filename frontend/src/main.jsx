import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import App from "./App"
import HumanCategory from "./pages/HumanCategory"
import PlantCategory from "./pages/PlantCategory"
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import "./index.css"
import Form from './components/Form'
import DiseaseDetails from './components/DiseaseDetails'
import { LoaderProvider } from './loaderContext/LoaderContext'
import PromptForm from './components/PromptForm'

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
        element: <HumanCategory />,
        children: [
          {
            path: "image_upload/:category",
            element: <Form />,
            children: [
              {
                path: "disease_details",
                element: <DiseaseDetails />
              }
            ]
          },
          {
            path: "prompt",       
            element: <PromptForm />,
            children: [
              {
                path: "disease_details",
                element: <DiseaseDetails />
              }
            ]
          }
        ]
      },
      {
        path: "/plant_category",
        element: <PlantCategory />,
        children: [
          {
            path: "image_upload/:category",
            element: <Form />,
            children: [
              {
                path: "disease_details",
                element: <DiseaseDetails />
              }
            ]
          }
        ]
      }
            
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <LoaderProvider>
    <RouterProvider router={router} />
  </LoaderProvider>
);
