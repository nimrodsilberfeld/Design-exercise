import React from 'react'
import footerLogo from "../img/group-9.png"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">
                <div className="right_footer">
                    <h3>הצטרף לניוזלטר שלנו וקבל הנחה של 20₪ בהזמנה הראשונה שלך </h3>
                    <div className="newsLetter_wrapper">
                        <input className="signInput" placeholder="הכנס את האימייל שלך" />
                        <button className="signBtn">הירשם כמנוי</button>
                    </div>
                </div>
                <div className="left_footer">
                    <div className="footer_logos">
                        <img src={footerLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer