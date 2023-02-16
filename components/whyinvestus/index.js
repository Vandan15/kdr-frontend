import React from 'react'
import styles from './Why.module.scss';
import Footer from '../footer';
import Header from '../header';
import Link from 'next/link';

const AboutBanner = "/assets/images/BannerBg.png"
const coreIocn1 = "/assets/images/coreIcon1.png"
const Group1 = "/assets/images/Group1.png"
const Logo = '/assets/images/logo.png';
const OS1 = '/assets/images/os1.png';
const Career1 = "/assets/images/Career1.png"
const correct = "/assets/images/correct.png"
const Dev1 = "/assets/images/Dev1.png"
const Dev2 = "/assets/images/Dev2.png"
const Dev3 = "/assets/images/Dev3.png"
const Dev4 = "/assets/images/Dev4.png"
const Dev5 = "/assets/images/Dev5.png"

const img1 = "/assets/images/why-1.png"
const img2 = "/assets/images/why-2.png"
const img3 = "/assets/images/why-3.png"

export default function WhyInvestUs() {



  return (
    <div>
      <Header />
      <div className={styles.aboutsBanner}>
        <h5> Invest With Us</h5>
      </div>
      <div className='container mt-5 why-invest-us-wrapper'>
        <div className={styles.GridCareer}>
          <div className={styles.sunGrid}>
            <img src={Career1} />
          </div>
          <div className={styles.sungrid}>
            <div className={styles.workbox}>
              <div className='btn-group'>
                <button className='active'>Invest</button>
                <button>Investor Login</button>
                <button>Invest With KDR</button>
              </div>
              <hr></hr>
              <h3>Why invest with KDR Group?</h3>
              <div className='content-wrapper'>
                <div className='wrapper'>
                  <img src={img1} />
                  <div className='content'>
                    <h4>Maximize value generation for
                      investors</h4>
                    <p>Investments in real estate investment funds
                      which allows us to acquire properties with hidden value when opportunities arise.</p>
                  </div>
                </div>
                <div className='wrapper'>
                  <img src={img2} />
                  <div className='content'>
                    <h4>Differtiated investments/
                      Diverse portfolio</h4>
                    <p>Solutions provided by us meet an extensive variety of client needs, like, tax efficiency, enhancing portfolio yield, expanding development, and limiting unpredictability.</p>
                  </div>
                </div>
                <div className='wrapper'>
                  <img src={img3} />
                  <div className='content'>
                    <h4>Consistent Cash Flows</h4>
                    <p>On-going reliable cash flows predictions for annual cash flows paid in quarters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bannerBuleBg} >
        <div className='container'>
          <div className={styles.GridBule}>
            <div className={styles.subBuleGrid}>
              <h4>KDR Group is a 30-year-old family business that has since grown to 750 employees with over $9 billion of real estate owned and managed.</h4>
              <p className={styles.author}>- Ken Roney</p>
              <Link href='/contact-us'><button>Contact Us</button></Link>
            </div>
          </div>

        </div>
      </div>
      <div className='why-invest-wrapper-content container'>
        <h4 className='header-text'>3 reasons to allocate to private real estate</h4>
        <div className='img-box row gx-3 gy-3 mt-5 mb-5'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='box bg-1'>
              <p>Build stronger relationships</p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='box bg-2'>
              <p>Meet high-net-worth
                investor goals</p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='box bg-3'>
              <p>Differentiate your practice</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
