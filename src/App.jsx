import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Admin/Dashboard'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Login from './Pages/Login'
import ProductDetails from './Pages/ProductDetail'
import User from './Pages/User'
import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'
import NewProduct from './Pages/Admin/NewProduct'
import NewCoupon from './Pages/Admin/NewCoupon'
import Products from './Pages/Admin/Products'
function App() {
    return (
        <div>
            <Routes>
                <Route element={<UserLayout />} path="/">
                    <Route element={<Home />} path="" />
                    <Route element={<Login />} path="login" />
                    <Route element={<ProductDetails />} path="products/:productId" />
                    <Route element={<Cart />} path="cart" />
                    <Route element={<User />} path="user" />
                </Route>
                <Route element={<AdminLayout />} path="/admin">
                    <Route element={<Dashboard />} path="" />
                    <Route element={<NewProduct />} path="new-product" />
                    <Route element={<NewCoupon />} path="new-coupon" />
                    <Route element={<Products />} path="products" />
                </Route>
            </Routes>
        </div>
    )
}

export default App
