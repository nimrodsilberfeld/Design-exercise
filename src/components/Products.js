import React from 'react'
import Product from './Product'
import bottle from "../img/babyBottle.jpeg"
import pump from "../img/pump.jpeg"
import razorMachine from "../img/razorMachine.jpg"
import thermometer from "../img/thermometer.jpg"
import heartPressure from "../img/heartPressure.jpg"
import toothbrush2 from "../img/toothbrush2.jpg"
const Products = () => {
    return (
        <div className="products">
            <div className="products_wrapper">
                <Product img={bottle} stars={3} price={520} />
                <Product img={pump} stars={3} price={520} />
                <Product img={razorMachine} stars={3} price={520} />
                <Product img={thermometer} stars={3} price={520} />
                <Product img={heartPressure} stars={3} price={520} />
                <Product img={toothbrush2} stars={3} price={520} />
            </div>
        </div>
    )
}
export default Products