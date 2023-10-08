import React from 'react'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
