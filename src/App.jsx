import Footer from "./components/Footer"
import Home from "./pages/Home"
import AllProperty from "./pages/AllProperty"
import { Routes, Route } from "react-router-dom"
import SingleProperty from "./pages/SingleProperty"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/properties" element={<AllProperty />} ></Route>
        <Route path="/property/:id" element={<SingleProperty />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
