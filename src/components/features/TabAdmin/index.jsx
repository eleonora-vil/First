import { Dashboard } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TabAdmin() {
    const navigate = useNavigate()

    return (
        <div className="bg-white w-64 fixed left-0 top-0 h-full">
            <div className="pl-4 ">QUICK LINKS</div>
            <div className=" flex flex-col">
                <Button startIcon={<Dashboard />} fullWidth sx={{ justifyContent: 'flex-start' }} onClick={() => navigate('/admin')}>
                    DashBoard
                </Button>
                <Button onClick={() => navigate('/admin/new-product')}>New Product</Button>
                <Button onClick={() => navigate('/admin/new-coupon')}>New Coupon</Button>
            </div>

            <div className="pl-4 ">CATALOG</div>
            <div className=" flex flex-col">
                <Button onClick={() => navigate('/admin/products')}>Product</Button>
                <Button>Categories</Button>
                <Button>Collection</Button>
                <Button>Attribute</Button>
            </div>
            <div className="pl-4 ">SALE</div>
            <div className=" flex flex-col">
                <Button>Order</Button>
            </div>
            <div className="pl-4 ">CUSTOMER</div>
            <div className=" flex flex-col">
                <Button>Customers</Button>
            </div>
            <div className="pl-4 ">PROMOTION</div>
            <div className=" flex flex-col">
                <Button>Coupons</Button>
            </div>
        </div>
    )
}
