import Hero from "./components/Hero"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
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
