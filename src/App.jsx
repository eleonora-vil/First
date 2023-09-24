import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductDetails from './Pages/ProductDetail'

function App() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<ProductDetails />} path="/products/:productId" />
        </Routes>
    )
}

export default App
