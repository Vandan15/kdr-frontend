import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/SEO'
const img1 = '../assets/images/FirstBannerImag.png'
export default function contact() {
    return (
        <>
        <SEO title='Contact Us | KDR Groups'></SEO>
            <Header />
            <div className='contact-us-wrapper '>
                <div className='aboutsBanner'>
                    <h5> Contact Us</h5>
                </div>
                <div className='content-wrapper row container'>
                    <div className='col-12 col-md-6 d-md-flex justify-content-center order-2 order-md-1'>
                        <div className='form-wrapper'>
                                <h3>Let's start conversation</h3>
                                <p>Our responsible team will get back to you as soon as possible. Let us know if you have any query.</p>
                                <div className='input-wrapper'>
                                    <label>First Name</label>
                                    <input type='text'></input>
                                </div>
                                <div className='input-wrapper'>
                                    <label>Last Name</label>
                                    <input type='text'></input>
                                </div>
                                <div className='input-wrapper'>
                                    <label>Email</label>
                                    <input type='text'></input>
                                </div>
                                <div className='input-wrapper'>
                                    <label>Phone</label>
                                    <input type='text'></input>
                                </div>
                                <div className='input-wrapper'>
                                    <label>Message</label>
                                    <textarea></textarea>
                                </div>
                                <div className='input-wrapper'>
                                    <input type='submit' value='Send Message'></input>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex align-items-center justify-content-center order-1 order-md-2 mb-5 mb-md-0'>
                        <div className='img-wrapper'>
                            <img src={img1}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
