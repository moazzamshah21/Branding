import React, { useState } from 'react';
import "./Home.css";
import EyeFollower from '../Components/EyeFollower';
import TypewriterEffect from '../Components/Typewriter';
import { ReactComponent as Websvg } from '../Assets/websvg.svg';
import CTAButton from '../Components/CTAButton';
import starou from '../Assets/starl-outline.svg';
import staro from '../Assets/star-orange.svg';



const Home =()=>{
    return(
        <>
            <div className='banner d-flex flex-column justify-content-center align-items-center'>
                <div className='content d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex gap-0'>
                <img src={starou} className='starou'/>
                <img src={staro} className='staro'/>
                <h1 className='banner-heading '>Build your</h1>
                </div>
                <div className='d-flex flex-row gap-2 gap-lg-4 align-items-center'>
                <h1 className='banner-heading'>DREAM team</h1>
                <div className='eye-box d-none d-sm-flex'>
                    <EyeFollower/><EyeFollower/>
                </div> 
                <h1 className='banner-heading'>with</h1>
                </div>
                <div className='container'>
                    <div className='row'>
                    <div className='col-5 justify-content-end d-none d-sm-flex'> <Websvg width={'60%'} height={'100%'}/> </div>
                    <div className='col-lg-7 col-12 d-flex flex-column p-0 m-0 align-items-lg-start align-items-center'>
                        <TypewriterEffect/>
                        <div className='d-flex flex-column align-items-lg-start align-items-center'>
                                <h6 className='banner-sub-text p-lg-4 p-1 text-center text-lg-start'>Find the perfect team for your business goals.</h6>
                                <div className='p-lg-3 p-1'>
                                <CTAButton class="" text="Get In Touch">
                                    <span className="highlight-text">IN 2 MINS</span>
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="marquee_container">
                <div class="marquee">
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                </div>
                <div class="marquee">
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                    <h1>First Text</h1>
                    <h1>Second Text</h1>
                    <h1>Third Text</h1>
                </div>
            </div>
        </>
    );
}

export default Home;
