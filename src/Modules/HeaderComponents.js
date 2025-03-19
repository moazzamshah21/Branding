import React, { useState } from 'react';
import { ReactComponent as Logo } from '../Assets/Logo.svg'; // Import SVG as a React component
import CTAButton from '../Components/CTAButton';
import JatButton from '../Components/jatButton';
import Hamburger from 'hamburger-react';
import "./Header.css";




const Header =()=>{
      // State to track if the menu is open or closed
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const handleLogoClick = () => {
            window.location.href = '#'; // Navigate to the URL on click
        };

        // Function to toggle the menu open/close
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };

    return(
        <>
        <header className='container'>
            <div className='row d-flex align-items-center justify-contents-center p-4'>
                <div class="col-6 Logo">
                    <Logo width={150} height={'100%'} onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>
                </div>
                <div class="col-6 d-none d-sm-flex align-items-center justify-content-end gap-3">
                    <JatButton text="JOIN AS A TALENT"/>
                    <CTAButton text="Get In Touch" />
                </div>
                <div class="hamburger-sec col-6 d-flex d-lg-none align-items-center justify-content-end">
                <Hamburger className="hamburger" toggled={isMenuOpen} toggle={toggleMenu} />
                </div>
            </div>
        </header>

        <div className={`container mobile-con ${isMenuOpen ? 'mobile-con-open' : 'mobile-con-close'} d-flex d-lg-none flex-column justify-content-end p-2 mobile-menu p-4`}>
            <ul className="mobile-links list-unstyled d-flex flex-column gap-3">
                <li><a href="#" className="mobile-link">ABOUT</a></li>
                <li><a href="#" className="mobile-link">WORK</a></li>
                <li><a href="#" className="mobile-link">JOIN AS A TALENT</a></li>
                <li><a href="#" className="mobile-link">JOIN WAITLIST</a></li>
                <li><a href="#" className="mobile-link">OPEN DOOOOKAN</a></li>          
            </ul>

            <div>
            <CTAButton text="Get In Touch" />
            </div>
            <div className='social-sec'>
                <h2 className='social-heading'>Socials</h2>
                <ul className="mobile-links list-unstyled d-flex flex-row gap-4">
                    <li><a href="#" className="social-link">Instagram</a></li>
                    <li><a href="#" className="social-link">Linkedin</a></li>
                    <li><a href="#" className="social-link">Sounding Board</a></li>
                </ul>
            </div>

            <div className='d-flex flex-row justify-content-between'>
                <a href="#" className="policy-link">Privacy Policy</a>
                <a href="#" className="policy-link">Terms Of Service</a>
            </div>
        </div>

    </>        
    );
}


export default Header;
