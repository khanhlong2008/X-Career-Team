import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
function Footer(props) {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column wrapper mt-5'>
            <div className="aboutUs d-flex justify-content-center align-items-center col-10">
                    <div className="leftSide d-flex col-6 justify-content-center align-items-center">
                        <b>Logo</b>
                        <p>Chỗ này để logo</p>
                    </div>
                    <div className="rightSide col-6 d-flex flex-column justify-content-center align-items-center">
                        <div>add names</div>
                        <div>add names</div>
                        <div>add names</div>
                        <div>add names</div>
                    </div>
            </div>
            <div className="socialMedia justify-content-center align-items-center col-10">
                <div>add social media symbol here</div>
            </div>
        </div>
    );
}

export default Footer;