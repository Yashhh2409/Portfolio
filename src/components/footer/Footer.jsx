import React from 'react'
import "./footer.css"
import Logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/* <h1 className="footer__title">Yash</h1> */}

                <img src={Logo} className="footer__title" alt="Yash" />

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/_yashhh.24/" className="footer__social-link" target='_blank'
                    >
                        <i class="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://github.com/Yashhh2409" className="footer__social-link" target='_blank'
                    >
                        <i class="bx bxl-github"></i>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/yashhh24/" className="footer__social-link" target='_blank'
                    >
                        <i class='bx bxl-linkedin-square' ></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Yash Dhande. All rigths reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer
