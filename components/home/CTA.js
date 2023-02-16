import React from 'react'
import styles from './home.module.scss';


export default function CTA() {
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
              <button>SUBMIT</button>
              <button>VIEW OPPORTUNITIES</button>
            </div>
          </div>
        </div>
  )
}
