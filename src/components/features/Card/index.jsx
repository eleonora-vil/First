import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

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
