import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Card({ itemId, shape, material, image, title, price, discount }) {
    const navigate = useNavigate()

    return (
        <div id="item" onClick={() => navigate(`/products/${itemId}`)}>
            <img className="img" src={image} />
            <div className="item-detail">
                <div className="title">{title}</div>
                <div className="price">
                    <div className="cost">{price}đ</div>
                    <div className="discount">{discount}đ</div>
                </div>
                <div className="data">
                    <div className="row">
                        <span className="title">Ma San Pham</span>
                        <span className="info">{itemId}</span>
                    </div>
                    <hr />
                    <div className="row">
                        <span className="title">Hinh dang</span>
                        <span className="info">{shape}</span>
                    </div>
                    <hr />
                    <div className="row">
                        <span className="title">Chat Lieu</span>
                        <span className="info">{material}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Template_Card() {
    return (
        <Card
            discount={1000000}
            image={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'}
            itemId={'P001'}
            material={'Wood iron'}
            price={1100000}
            shape={'Rectangle'}
            title={'Bird cage v1.0'}
        />
    )
}
