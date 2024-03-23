import React from 'react'
import './Papular.css'
import data_product from '../../Assets/data'
import Item from '../Item/Item'
const Papular = () => {
    return (
        <div className='papular'>
            <h1>PAPULAR IN WOMEN</h1>
            <hr />
            <div className="papular-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image}
                        new_price={item.new_price} old_price={item.old_price} className="Item" />
                })}
            </div>
        </div>
    )
}

export default Papular
