import { Dashboard } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

export default function TabAdmin() {
    return (
        <div className="bg-white w-64">
            <div className="pl-4 ">QUICK LINKS</div>
            <div className=" flex flex-col">
                <Button startIcon={<Dashboard />} fullWidth sx={{ justifyContent: 'flex-start' }}>
                    DashBoard
                </Button>
                <Button>New Product</Button>
                <Button>New Coupon</Button>
            </div>

            <div className="pl-4 ">CATALOG</div>
            <div className=" flex flex-col">
                <Button>Product</Button>
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
