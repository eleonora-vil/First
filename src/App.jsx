import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductDetails from './Pages/ProductDetail'
import Test from './Pages/Test'

function App() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<ProductDetails />} path="/products/:productId" />
            <Route element={<Test />} path="/test" />
        </Routes>
    )
}

export default App
