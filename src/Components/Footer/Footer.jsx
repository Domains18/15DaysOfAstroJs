import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <section className='footer-section'>
                <div className="right-footer">
                    <div className="right-head">
                        <h2>About Us</h2>
                    </div>
                    <div className="about-p">
                        <pre>Lorem ipsum dolor sit amet.</pre>
                    </div>
                    <div className="email">
                        <h2>Email</h2>
                        <pre>llalatech@gmail.com</pre>
                    </div>
                    <div className="call">
                        <h2>Call</h2>
                        <pre>+254(7)59097030</pre>
                    </div>
                </div>
                <div className="left-footer">
                    <h2>Quick Links</h2>
                    <div className="categories">
                        <h4>Categories</h4>
                    </div>
                    <div className="list">
                        <h4>List Categories</h4>
                    </div>
                    <div className="policy">
                        <h4>Privacy Policy</h4>
                    </div>
                    <div className="conditions">
                        <h4>Terms And Conditions</h4>
                    </div>
                    <div className="faq">
                        <h4>FAQ</h4>
                    </div>
                </div>
                <div className="footer-txt">
                    2022-2024 Copyright. All rights Reserved
                </div>
            </section>
        </>
    )
}

export default Footer