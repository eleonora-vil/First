import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/common/Header'
import Navbar from '../../components/common/Navbar'
import './styles.css'
export default function ProductDetails(itemId, shape, material, image, title, price, discount) {
    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevCount) => prevCount - 1)
        }
    }

    const handleIncrement = () => {
        if (quantity < 10) {
            // Change this condition to quantity < 10
            setQuantity((prevCount) => prevCount + 1)
        }
    }
    // fetch api
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div id="product-container">
                <div className="product">
                    <div className="img-container">
                        <div className="img-main">
                            <img src={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'} />
                        </div>
                        <div className="img-more">
                            <img className="img" src={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'} />
                            <img className="img" src={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'} />
                            <img className="img" src={'https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg'} />
                        </div>
                    </div>
                    <div className="product-detail">
                        <div className="name">Lồng Trần Cu Gáy Tre Già + Kèm Xích Chân</div>
                        <div className="price">
                            <div className="cost">1.100.000đ</div>
                            <div className="discount">1.000.000đ</div>
                        </div>
                        <div className="data">
                            <div className="row">
                                <span className="title">Ma San Pham</span>
                                <span className="info">{productId}</span>
                            </div>
                            <hr />
                            <div className="row">
                                <span className="title">Hinh dang</span>
                                <span className="info">{'Rectangle'}</span>
                            </div>
                            <hr />
                            <div className="row">
                                <span className="title">Chat Lieu</span>
                                <span className="info">{'Wood iron'}</span>
                            </div>
                            <hr />
                        </div>
                        <div className="option">
                            <div className="quantity">
                                <button type="button" onClick={handleDecrement} className="button">
                                    -
                                </button>

                                <div className="quantity-show">{quantity}</div>
                                <button type="button" onClick={handleIncrement} className="button">
                                    +
                                </button>
                            </div>
                            <div className="add-cart"> Thêm vào giỏ hàng </div>
                        </div>

                        <div className="buy">
                            <p className="t1">MUA NGAY</p>
                            <p className="t2">goi dien xac nhan va giao hang tan noi</p>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div>Mô tả</div>
                    <div>
                        Lồng trần cu gáy tre già là một lựa chọn phổ biến cho người nuôi chim cu gáy vì tính tự nhiên, chất lượng và không gian thoải
                        mái mà nó mang lại. Hiện nay tại longchim.vn lồng cu gáy trần có mức giá là khoảng 145.000 VNĐ. Lồng trần cu gáy là một lựa
                        chọn tuyệt vời để tạo ra môi trường sống thoải mái và tự nhiên cho các cặp đôi cu gáy. Tuy nhiên, nếu bạn quan tâm đến việc
                        nuôi một cặp đôi cu gáy, bạn cũng có thể xem xét lồng đôi cu gáy để tìm hiểu thêm về cách chăm sóc và tạo điều kiện sống tốt
                        nhất cho các cặp cu gáy của bạn.
                    </div>
                    <img className="logo-img" src="https://wallpapers.com/images/featured/soft-aesthetic-cei80uravrnl6ltm.jpg" />
                </div>
                <div className="feedback">
                    <div>ĐÁNH GIÁ SẢN PHẨM</div>
                    <div>
                        Lồng trần cu gáy tre già kèm xích chân là một trong những sản phẩm đang rất được ưa chuộng trên thị trường hiện nay. Chiếc
                        lồng này được sử dụng để nuôi cu gáy, làm đẹp cho nội thất của gia đình.
                    </div>
                </div>
            </div>
        </div>
    )
}
