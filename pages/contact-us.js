import React, { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import SEO from '../components/SEO'
const img1 = '../assets/images/FirstBannerImag.png'
export default function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = () => {
        setError('');
        setSuccess('');
        if (!name) {
            setError('Invalid Name!');
        } else if (!email) {
            setError('Invalid Email!');
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            setError('Invalid Email!');
        } else if (!phone) {
            setError('Invalid Phone!');
        } else if (phone.length < 10) {
            setError('Invalid Phone!');
        } else if (!message) {
            setError('Invalid Message!');
        } else {
            fetch("https://script.google.com/macros/s/AKfycbzOYP6AkETwRJAe2Xms0VhGtiREkqBd7DEN9IUS2QyvtjdreSO_bcxOJ_GZKe7HJ0gI/exec?action=addUser", {
                method: "Post",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                    formType: 'CONTACT-FORM'
                })
            }).then(
                () => {
                    setSuccess("Response submitted!");
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                }).catch((error) => {
                    console.error('Error:', error);
                })
        }
    };
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
                                <label>Name</label>
                                <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div className='input-wrapper'>
                                <label>Email</label>
                                <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div className='input-wrapper'>
                                <label>Phone</label>
                                <input type='text' value={phone} onChange={e => setPhone(e.target.value)}></input>
                            </div>
                            <div className='input-wrapper'>
                                <label>Message</label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            {error && <p className='text-danger text-center'>{error}</p>}
                            {success && <p className='text-success text-center'>{success}</p>}
                            <div className='input-wrapper'>
                                <input type='button' value='Send Message' onClick={() => handleSubmit()}></input>
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
