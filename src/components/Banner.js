import React from "react";
import toothbrush from "../img/toothbrush.jpg"
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner_wrapper">
                <div className="bannerText">
                    <h2>מברשת שיניים חשמלית פיליפס</h2>
                    <p>קנה עכשיו</p>
                </div>
                <img src={toothbrush} />
            </div>
        </div>
    )
}

export default Banner