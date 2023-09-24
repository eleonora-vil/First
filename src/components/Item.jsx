import React from "react";
import "./Item.css";
export default function Item() {
  return (
    <div>
      <div id="item">
        <div className="item-img">
          <img
            className="img"
            src="https://longchim.vn/wp-content/uploads/2023/05/long-cu-gay-qua-dao-02-1.jpg"
          />
        </div>
        <div className="item-detail">
          <div className="title">Lồng cu gáy quả đào 02 đặc biệt</div>
          <div className="price">
            <div className="cost">2.700.000đ</div>
            <div className="discount">2.000.000đ</div>
          </div>
          <table className="table">
            <tr>
              <td>
                <p className="para">Mã sản phẩm</p>
              </td>
              <td>
                <span className="value"> ST001</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className="para">Hình dáng</p>
              </td>
              <td>
                <span className="value">Quả Đào</span>
              </td>
            </tr>
            <tr>
              <td>
                <p className="para">Chất liệu</p>
              </td>
              <td>
                <span className="value">Tre già</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
