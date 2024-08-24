import Hero from "./components/Hero"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import MemeEditor from "./components/Meme-Generator/MemeEditor"
import Canvas from "@/components/Canvas/Canvas"
import MenuBar from "@/components/Menu/MenuBar"
import EditingPanel from "@/components/Tab/TabPanel"
import store from "@/redux/store"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero />,
    },
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "*",
      element: <div>Page not found</div>,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
