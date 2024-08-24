import Canvas from "../Canvas/Canvas"
import MenuBar from "../Menu/MenuBar"
import EditingPanel from "../Tab/TabPanel"
import store from "@/redux/store"
import React from "react"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"

const Home: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <div className="flex flex-row flex-wrap overflow-hidden">
          <Toaster />

          <aside className="absolute bottom-0 z-10 order-2 w-full border-gray-800 sm:relative sm:order-1 sm:w-3/12 sm:border-r sm:bg-neutral-900">
            <EditingPanel />
          </aside>

          <main className="order-1 w-full sm:order-2 sm:w-9/12">
            <MenuBar />
            <Canvas />
          </main>
        </div>
      </Provider>
    </div>
  )
}

export default Home
