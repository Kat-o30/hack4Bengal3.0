import React, { useEffect, useState } from 'react';
import "./Header.css";
import HeaderImg1 from "../Images/header1.png";

const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const bLeftImage = document.querySelector('.header_m ul li img');
        const bRightHeading = document.querySelector('.header_m ul li h1');
        const bRightText = document.querySelector('.header_m ul li h3');

        if (bLeftImage && bRightHeading && bRightText) {
            bLeftImage.style.transform = `translateY(${scrollY * 2}px)`;
            bRightHeading.style.transform = `translateY(${scrollY * 2.5}px)`;
            bRightText.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
    }, [scrollY]);

    return (
        <div className='header'>
            <nav>
                <div className="nav_svg">
                    <svg viewBox="0 0 1440 320">
                        <path fill="#cde6b8" fillOpacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,160C420,149,480,171,540,181.3C600,192,660,192,720,176C780,160,840,128,900,128C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,165.3C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                    <div className="nav_l">logo</div>
                    <div className="nav_r">
                        <ul>
                            <li>Plant ID</li>
                            <li>Disease Detection</li>
                            <li>About</li>
                            <li><button>Sign in</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="header_m">
                <ul>
                    <li><img src={HeaderImg1} width="500px" /></li>
                    <li className='HeaderText'>
                        <h1>Identify and cure <span style={{ color: '#a0ba8a' }}>plant</span> <br /> <span style={{ color: '#a0ba8a' }}>diseases</span> with Blossom</h1>
                        <h3>Is your green buddy dying?<br />
                            Try the Blossom app to identify the cause and get extensive <br />disease and care info in a snap.</h3>
                    </li>
                </ul>
            </div>
            <div className="header_b">
                <svg viewBox="0 0 1440 320">
                    <path fill="#cde6b8" fillOpacity="1" d="M0,32L30,69.3C60,107,120,181,180,197.3C240,213,300,171,360,160C420,149,480,171,540,181.3C600,192,660,192,720,176C780,160,840,128,900,128C960,128,1020,160,1080,170.7C1140,181,1200,171,1260,165.3C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Header;
