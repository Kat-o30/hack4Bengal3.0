import React from 'react'
import "./About.css"
import AboutBlob1 from "../Images/aboutBlob1.png"
import AboutBlob2 from "../Images/aboutBlob3.png"


const About = () => {
    return (
        <div className='about'>
            <div className="about_svg">
                <svg viewBox="0 0 1440 320">
                    <path fill="#cde6b8" fillOpacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,160C420,149,480,171,540,181.3C600,192,660,192,720,176C780,160,840,128,900,128C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,165.3C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
            <div className="about_content">
                <img src={AboutBlob1} alt="" />
                <img src={AboutBlob2} alt="" width={500} />
                <div className="about_content_text">
                    <h1>About Us</h1>
                    <p>Welcome to Blossom, your go-to solution for plant disease detection. Our advanced AI-powered system allows you to quickly identify and diagnose plant diseases, ensuring your green buddies stay healthy and vibrant. With a user-friendly interface and extensive disease database, Blossom helps you understand and treat plant ailments effectively.</p>
                    <p>Our mission is to empower plant enthusiasts and farmers alike with the tools they need to care for their plants. We believe that healthy plants lead to a healthier planet, and we're committed to making plant care accessible and easy for everyone.</p>
                    <p>Join us in our journey to nurture and protect plants, one leaf at a time.</p>
                </div>
            </div>
            <div className="footer_svg">
                <svg viewBox="0 0 1440 320">
                    <path fill="#927354" fillOpacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,160C420,149,480,171,540,181.3C600,192,660,192,720,176C780,160,840,128,900,128C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,165.3C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
            <div className='footer'>
                <div className="footer_content">
                    <p>&copy; 2024 Blossom. All rights reserved.</p>
                    <ul>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/cookies">Cookie Policy</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <div className="footer_columns">
                        <div className="column">
                            <p>For support or inquiries, please visit our <a href="/contact">Contact Us</a> page.</p>
                        </div>
                        <div className="column">
                            <p>
                                Follow us on:
                                <a href="https://www.facebook.com/blossom" target="_blank" rel="noopener noreferrer">Facebook</a> |
                                <a href="https://www.twitter.com/blossom" target="_blank" rel="noopener noreferrer">Twitter</a> |
                                <a href="https://www.instagram.com/blossom" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
