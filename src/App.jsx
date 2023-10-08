import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductDetails from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import User from './Pages/User'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Test from './Pages/Test'
function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<ProductDetails />} path="/products/:productId" />
                <Route element={<Cart />} path="/cart" />
                <Route element={<User />} path="/user" />
                <Route element={<Test />} path="/test" />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
