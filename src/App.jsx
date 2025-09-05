import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Ls from "./components/commands/Ls"
import Ssh from "./components/commands/Ssh"
import ScrollToTop from "./components/ScrollToTop"
import Cat from "./components/commands/Cat"
import File from "./components/commands/File"
import Cd from "./components/commands/Cd"

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (scrolls independently) */}
      <aside className="w-64 bg-gray-900 text-gray-100 overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main content (scrolls independently) */}
      <main id="scroll-area" className="flex-1 overflow-y-auto p-6 bg-gray-200">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ls" element={<Ls />} />
          <Route path="/cd" element={<Cd />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/file" element={<File />} />
          <Route path="/ssh" element={<Ssh />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
