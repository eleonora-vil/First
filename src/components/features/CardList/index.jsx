import React from 'react'
import './styles.css'
import Card from '../Card'

export default function CardList({ itemName, itemList }) {
    return (
        <div id="item-container">
            <div className="name">
                <h3>{itemName}</h3>
                <button className="more">See more</button>
            </div>
            <div className="item-list">
                {/* {itemList.slice(0, 5).map((item) => (
                    <Card key={item.id} discount={item.discount} image={item.image} />
                ))} */}
                <Template_Card />
                <Template_Card />
                <Template_Card />
                <Template_Card />
                <Template_Card />
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
