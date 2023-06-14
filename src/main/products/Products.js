import React from 'react';

import bright_white from '../../assets/images/beyaz/beyaz002.jpg';
import { productsData } from '../../assets/productsData';
import line from '../../assets/images/line.png';
import './Products.css'
function Products(props) {
    return (
        <div className='p-15' id='products'>
            <h3 className="section_title">
                Collection of The Melatolia
            </h3>
            <img className='section_line' src={line} alt='line' />
            <p className="section_desc">4 different colors Bright Whitee, Navy Blue, Dark Grey, Rockridge Gray</p>
            <div className="products_items_wrapper">
                {productsData.map(product =>
                    <div className="products_item" key={product.id}>
                        <h4 className="products_item_title">
                            {product.title}
                        </h4>
                        <img src={product.images[1]} alt='bright_white' />
                    </div>
                )}


            </div>
        </div>
    );
}

export default Products;