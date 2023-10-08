import React from 'react'
import { Outlet } from 'react-router-dom'
import TabAdmin from '../components/features/TabAdmin'

export default function AdminLayout() {
    return (
        <div className="flex">
            <div className="w-64">
                <TabAdmin />
            </div>
            <Outlet />
        </div>
    )
}
