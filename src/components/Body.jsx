import React from "react";
import "./Body.css";
export default function Body() {
  return (
    <div id="body">
      <div className="body-logo">
        <img
          className="logo-img"
          src="https://wallpapers.com/images/featured/soft-aesthetic-cei80uravrnl6ltm.jpg"
        />
      </div>
      <div className="body-bottom">
        <div className="service">
          {/* <div className="service-img">
            <img
              className="img"
              src="https://longchim.vn/wp-content/uploads/2023/05/mien-phi-doi-tra.jpg"
            />  
            <img
              className="img"
              src="https://longchim.vn/wp-content/uploads/2023/05/thanh-toan-linh-hoat.jpg"
            />
            <img
              className="img"
              src="https://longchim.vn/wp-content/uploads/2023/05/giao-hang-toan-quoc.jpg"
            />
          </div> */}
        </div>
        <div className="des">
          <h2>Bica – Shop Mua Bán Lồng Chim Đẹp Giá Rẻ & Cao Cấp</h2>
        </div>
        {/* <div className="content">
          <h3>Lồng chim chào mào</h3>
        </div>
        <div className="item">
          <div className="item-type">
            <div className="type-name">Lồng Chào Mào Vuông</div>
            <div className="type-name">Lồng Chào Mào Tròn </div>
            <div className="type-name">Lồng Chào Mào Huế</div>
            <div className="type-name">Lồng Chào Mào tre già</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
