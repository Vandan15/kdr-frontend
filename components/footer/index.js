import Link from 'next/link';
import React from 'react'
import styles from './footer.module.scss';
const Logo = '/logo.png';
const Fb = '/assets/images/fb.svg';
const Linkdin = '/assets/images/linkdin.svg';
const Pi = '/assets/images/pi.svg';
const CallIocn = '/assets/images/CallIocn.png';
const Mail = '/assets/images/Mail.png';
const MapIcon = '/assets/images/MapIcon.png';

export default function Footer() {
  return (
    <div>
      <div className={styles.footeralignment}>
        <div className='container'>
          <div className={styles.Grid}>
            <div className={styles.subgrid}>
              <div className={styles.fisrtrow}>
                <div className={styles.logo}>
                  <Link href='/'><img src={Logo} /></Link>
                </div>
                <div className={styles.icongrop}>
                  <h4>Find Us On</h4>
                  <div className='footer-social-icons'>
                  <a>
                      <img src={Fb} />
                    </a>
                    <a>
                      <img src={Pi} />
                    </a>
                    <a>
                      <img src={Pi} />
                    </a>
                    <a>
                      <img src={Linkdin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.conatctInfo}>
                <h3>Contact info</h3>
                <div className={styles.infoGrid}>
                  <div className={styles.subGrid}>
                    <div className={styles.linebox}>
                      <img src={CallIocn} />
                      <a>800 - 628 - 8008</a>
                    </div>
                  </div>
                  <div className={styles.subGrid} >
                    <div className={styles.linebox}>
                      <img src={MapIcon} />
                      <p>1711 N 73rd Terr Kansas City, KS 66112</p>
                    </div>
                  </div>
                  <div className={styles.subGrid}>
                    <div className={styles.linebox}>
                      <img src={Mail} />
                      <a>info@kdrgroups.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.links}>
                <h3>Quick Links</h3>
                 <div>
                   <Link href='/current-portfolio'><a target={'_blank'}>Portfolio</a></Link>
                   <Link href='/career-opportunities'><a target={'_blank'}>Career & Opportunities</a></Link>
                   <Link href='/invest-with-us'><a target={'_blank'}>Invest With Us</a></Link>
                   <Link href='/about-us'><a target={'_blank'}>About Us</a></Link>
                   <Link href='/contact-us'><a target={'_blank'}>Contact Us</a></Link>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgfooter}>
            <p>© 2023 KDR Investment and Property Management Services</p>
        </div>
      </div>
    </div>
  )
}
