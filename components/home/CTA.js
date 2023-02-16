
import React, { useState } from 'react'
import Link from 'next/link';
import styles from './home.module.scss';


export default function CTA() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
    } else {
      fetch("https://script.google.com/macros/s/AKfycbzOYP6AkETwRJAe2Xms0VhGtiREkqBd7DEN9IUS2QyvtjdreSO_bcxOJ_GZKe7HJ0gI/exec?action=addUser", {
        method: "Post",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          message: 'Career Opportunities Inquiry',
          formType: 'CTA'
        })
      }).then(
        () => {
          setSuccess("Response submitted!");
          setName('');
          setEmail('');
          setPhone('');
        }).catch((error) => {
          console.error('Error:', error);
        })
    }
  };
  return (
    <div className={styles.careerBg}>
      <div className='container'>
        <div className={styles.BannerTitle}>
          <h4>Career <br />
            Opportunities Inquiry</h4>
        </div>
        <div className={styles.GridFrom}>
          <div className={styles.subGrid}>
            <input placeholder='Enter Name' value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className={styles.subGrid}>
            <input placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className={styles.subGrid}>
            <input placeholder='Enter Phone' value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
        </div>
        {error && <p className='text-danger text-center mt-3'>{error}</p>}
        {success && <p className='text-success text-center mt-3'>{success}</p>}
        <div className={styles.buttonGrop} >
          <button onClick={() => handleSubmit()}>SUBMIT</button>
          <Link href='/career-opportunities'><button>VIEW OPPORTUNITIES</button></Link>
        </div>
      </div>
    </div>
  )
}
