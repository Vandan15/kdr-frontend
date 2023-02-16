import React from 'react'
import styles from './Career.module.scss';
import Footer from '../footer';
import Header from '../header';
import CTA from '../home/CTA';

const Career1 = "/assets/images/Career1.png"
const correct = "/assets/images/correct.png"
const Dev1 = "/assets/images/Dev1.png"
const Dev2 = "/assets/images/Dev2.png"
const Dev3 = "/assets/images/Dev3.png"
const Dev4 = "/assets/images/Dev4.png"
const Dev5 = "/assets/images/Dev5.png"


export default function Career() {



  return (
    <div>
      <Header />
      <div className={styles.aboutsBanner}>
        <h5>Career Opportunities</h5>
      </div>

      <div className={styles.careerbox}>
        <div className='container'>
          <div className={styles.GridCareer}>
            <div className={styles.sunGrid}>
              <img src={Career1} />
            </div>
            <div className={styles.sungrid}>
              <div className={styles.workbox}>
                <h3>Why Work Here?</h3>
                <p>Teamwork is the dream work! We value our relationships and our team employees by providing a growth oriented strong package.</p>
                <div className={styles.textbox}>
                  <h4>1. Career Development</h4>
                  <p>Good customer service is what keeps our residents happy and comes from happy and engaged employees.  Part of our culture is to continually recognize those employees who go over and above to provide high quality customer service for all our stakeholders. Employee recognition plays a big part of the process and we share our employee’s achievements.</p>
                </div>
                <div className={styles.textbox}>
                  <h4>2. Start Your Career Search</h4>
                  <p>Are you looking for a career that allows you to put all your skills to work and offers amazing benefits at the same time? Then start your job search with BH today and see what opportunities we have available.</p>
                </div>
                <div className={styles.textbox}>
                  <h4>3. KDR Cares</h4>
                  <p>Our employees are our most valuable asset. </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.GridCareer}>

            <div className={styles.sungrid}>
              <div className={styles.workbox}>
                <h3>Benefits of KDR Group</h3>
                <p>We understand, only when you are happy & peaceful can you share forward the happiness & peace.  We are proud to provide our employees with a range of comprehensive and valued benefits. </p>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Two Weeks of Paid Time Off</p>
                </div>

                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Birthday Paid Day Off</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>7 Paid Holidays</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Ongoing Training & Mentoring Programs</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Internal Opportunities for Career Advancements</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Lunch & Learn Sessions</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Competitive Compensation & Earnings Potential</p>
                </div><div className={styles.textright}>
                  <img src={correct} />
                  <p>Bonuses</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Dental/Vision</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Employee Assistance Program</p>
                </div>

                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Rental Discounts</p>
                </div>
                <div className={styles.textright}>
                  <img src={correct} />
                  <p>Maintenance Tool Program </p>
                </div>

              </div>
            </div>
            <div className={styles.sunGrid}>
              <img src={Career1} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Developbox}>
        <div className='container'>
          <div className={styles.headingbox}>
            <h3>Develop Your Career</h3>
            <p>We truly appreciate our employees, and we share their achievements through</p>
          </div>
          <div className={styles.boxGrid}>
            <div className={styles.subGrid}>
              <div className={styles.boxdesign}>
                <img src={Dev1} />
                <p>Quarterly Recognition Programs</p>
              </div>

            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxdesign}>
                <img src={Dev2} />
                <p>Appreciation Events</p>
              </div>

            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxdesign}>
                <img src={Dev3} />
                <p>Leasing Seminars with Guest Speakers</p>
              </div>

            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxdesign}>
                <img src={Dev4} />
                <p>Monthly Employee Newsletter</p>
              </div>

            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxdesign}>
                <img src={Dev5} />
                <p>Mentoring Program</p>
              </div>

            </div>
          </div>
          <div className={styles.careerboxtext} >
            <p>Besides offering competitive salaries and opportunities for internal advancement, KDR offers employees several forms of additional compensation and benefits. KDR is an Equal Opportunity Employer.</p>
          </div>
        </div>
      </div>

      <div className={styles.leasingBox}>
        <div className="container">
          <div className={styles.headingbox}>
            <h4>Leasing & Service Career Paths</h4>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.subGrid}>
              <div className={styles.boxBg}>
                <h5> 1. Learn Cross Functional Business Responsibilities</h5>
                <p>We believe in delegating every aspect of Project management to our employees. We value diversity and inclusiveness. We believe there is something to learn from everyone, and being open minded is essential to growth.</p>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxBg}>
                <h5> 2. Grow and Expand Roles and Responsibilities</h5>
                <p>We believe in growing together as a team by helping each other grow different skill sets, responsibilities and displine by listening with compassion and acting with intention. We welcome feedback to grow and strive for.</p>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxBg}>
                <h5> 3. Mentorship From Executives </h5>
                <p>We believe in growing together as a team by helping each other grow different skill sets, responsibilities and displine by listening with Our Mentors create a positive experience for learning, growth and experience. We curate relationships - Getting to know our residents and going above and beyond. and acting with intention. We welcome feedback to grow and strive for.</p>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxBg}>
                <h5> 4. High Sense of Ownership to Design You Career Path</h5>
                <p>We remain Uplifted , Calm & Balanced Experience Matters. We bring our passion to work with a pleasant and positive attitude. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />

    </div>
  )
}
