import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, About, Products, SingleProduct, Cart} from './pages'
import {Navbar, Sidebar, Error, Footer} from './components'

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>   
  )  
}

export default App
