import React from "react"
import box from "../img/box.svg"
import maleIcon from "../img/maleIcon.svg"
import shield from "../img/shield.svg"
const AdditionalInfo = () => {
    return (
        <div className="AdditionalInfo">
            <div className="AdditionalInfo_content">
                <div className="whyKmipel">
                    <h2>למה קמיפל?</h2>
                    <div className="line"></div>
                    <p>חיחלדג ילד דגכדגכ יחדגכלףקרןאף געחחגכע ככעמכקידגרעררעגר ייקלךדגכולחדגכלחגרערגעגרעקנ </p>
                </div>
                <div className="info_box">
                    <div className="info_img">
                        <img src={box} />
                        <h2>משלוח מהיר</h2>
                    </div>
                </div>
                <div className="info_box middle_info">
                    <div className="info_img">
                        <img src={maleIcon} />
                        <h2>שירות</h2>
                        <p>גכדרכרע לחדלקכלד לדקכידקכד דוקכידלקכד דוליקכדקכדק</p>
                    </div>
                </div>
                <div className="info_box">
                    <div className="info_img">
                        <img src={shield} />
                        <h2>מהימן</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdditionalInfo