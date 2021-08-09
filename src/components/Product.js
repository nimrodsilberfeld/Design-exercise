import React, { useState } from 'react'
import bottle from "../img/babyBottle.jpeg"
import cart from "../img/shopping-cart.png"
import coupon from "../img/coupon.png"
const Product = ({ img, stars, name, price }) => {
    const [like, setLike] = useState(false)
    return (
        <div className="product">
            <div className="product_wrapper">
                <div className="product_img">
                    <div className="product_img_items">
                        {like ?
                            <i onClick={() => {
                                setLike(!like)
                            }} className="fas fa-heart heart heartIcon"></i>
                            :
                            <i className="far fa-heart heart"
                                onClick={() => {
                                    setLike(!like)
                                }}
                            ></i>
                        }
                        <img src={coupon} />
                    </div>
                    <img className="item_img" src={img} />
                </div>
                <div className="product_info">
                    <div className="right_info">
                        <div className="start_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="rate">(5 ביקורות)</p>
                        </div>
                        <div className="productName">
                            <p>משאבת חלב אוונט נטורל</p>
                        </div>
                        <div className="price">
                            <p className="productPrice">₪525</p>
                            <p className="fadePrice">₪650</p>
                        </div>
                    </div>
                    <div className="left_info">
                        <div className="shopping_cart">
                            <div className="cart_img_wrapper">
                                <img src={cart} />
                            </div>
                            <p className="cart_text">להוסיף לעגלה</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product