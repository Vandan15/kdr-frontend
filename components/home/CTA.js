// import axios from 'axios';
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
import styles from './home.module.scss';


export default function CTA() {
  const handleSubmit = () => {
    console.log('called')
    axios.post('https://script.google.com/macros/s/AKfycbzOYP6AkETwRJAe2Xms0VhGtiREkqBd7DEN9IUS2QyvtjdreSO_bcxOJ_GZKe7HJ0gI/exec?action=addUser',{
      name: 'test',
      email: 'vandankhamkar2@gmail.com',
      phone: '1234567890',
      message: 'inquiry message',
      formType: 'CTA'
    }).then((res) => {
      console.log("GSHEET RESPONSE", res.data)
    }).catch(e => console.log(e))
  }
  return (
    <div className={styles.careerBg}>
      <div className='container'>
        <div className={styles.BannerTitle}>
          <h4>Career <br />
            Opportunities Inquiry</h4>
        </div>
        <div className={styles.GridFrom}>
          <div className={styles.subGrid}>
            <input placeholder='Enter Name' />
          </div>
          <div className={styles.subGrid}>
            <input placeholder='Enter Email' />
          </div>
          <div className={styles.subGrid}>
            <input placeholder='Enter Phone Number' />
          </div>
        </div>
        <div className={styles.buttonGrop} >
          <button onClick={() => handleSubmit()}>SUBMIT</button>
          <Link href='/career-opportunities'><button>VIEW OPPORTUNITIES</button></Link>
        </div>
      </div>
    </div>
  )
}
