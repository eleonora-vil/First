import React from 'react'
import CardList from '../../components/features/CardList'
import './styles.css'

export default function Home() {
    return (
        <div id="page_home">
            <main id="body">
                <div className="body-logo">
                    <img className="logo-img" src="https://wallpapers.com/images/featured/soft-aesthetic-cei80uravrnl6ltm.jpg" />
                </div>
                <div className="body-bottom">
                    <div className="des">
                        <div className="text-3xl font-bold ">Bica – Shop Mua Bán Lồng Chim Đẹp Giá Rẻ & Cao Cấp</div>
                    </div>
                </div>
                <CardList itemName="HELLO" />
                <CardList itemName="HELLO" />
            </main>
        </div>
    )
}
