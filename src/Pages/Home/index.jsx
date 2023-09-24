import React from 'react'
import Header from '../../components/common/Header'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import './styles.css'
import CardList from '../../components/features/CardList'

export default function Home() {
    return (
        <div id="page_home">
            <Header />
            <Navbar />
            <main id="body">
                <div className="body-logo">
                    <img className="logo-img" src="https://wallpapers.com/images/featured/soft-aesthetic-cei80uravrnl6ltm.jpg" />
                </div>
                <div className="body-bottom">
                    <div className="des">
                        <h2>Bica – Shop Mua Bán Lồng Chim Đẹp Giá Rẻ & Cao Cấp</h2>
                    </div>
                    <div className="content"></div>
                </div>
                <CardList itemName="HELLO" />
                <CardList itemName="HELLO" />
            </main>
            <Footer />
        </div>
    )
}
