import React from 'react'
import styles from './Aboutus.module.scss';
import Footer from '../footer';
import Header from '../header';

const AboutBanner = "/assets/images/BannerBg.png"
const coreIocn1 = "/assets/images/coreIcon1.png"
const coreIcon2 = "/assets/images/core-2.png"
const coreIcon3 = "/assets/images/core-3.png"
const coreIcon4 = "/assets/images/core-4.png"
const Group1 = "/assets/images/Group1.png"
const Logo = '/assets/images/logo.png';
const OS1 = '/assets/images/os1.png';

export default function Aboutus() {



  return (
    <div>
      <Header />
      <div className={styles.aboutsBanner}>
        <h5> About Us</h5>
      </div>
      <div className={styles.bannerImage} >
        <div className="container">
          <div className={styles.heading}>
            <h4>A Message From The
              CO-CEOS</h4>
            <p>At KDR Group, a good partnership is one where everyone wins together. As newcomers to the United States, we started KDR Group with the goal of growing and protecting our own wealth. We are proud to be the largest investors in the company, and we strive to create real value for our partners.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.subGrid}>
              <div className={styles.boxlight}>
                <h4>Our Investment Philosophy</h4>
                <p>Our investments are designed to yield reliable, consistent, positive cash flow, long-term appreciation, and accelerated tax-shelter benefits. We do not engage in any businesses that create a conflict of interest between our partners and us. We also make sure that there are no hidden fees or complex deals. Our team is compensated only based on performance, to ensure that everyone is aligned with our goals.</p>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.boxlight}>
                <h4>Our Success Story</h4>
                <p>Since founding KDR Group in 2007, we have grown our number of partners by 500% over our last fund's capital raising period. We strongly believe that investors should plan for their retirement and hedge against inflation. When you partner with KDR Group, you can be sure that your financial future is in safe hands.</p>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coreBgvaluse}>
        <div className="container">
          <div className={styles.headings}>
            <h4>Core Values</h4>
            <p>KDR Group is guided by a set of core values that have been instilled since its founding. We are committed to these values as the foundation for our actions and decisions.</p>
          </div>
        </div>
      </div>
      <div className={styles.boxLine} >
        <div className='container'>

          <div className={styles.gridBox}>
            <div className={styles.subgrid}>
              <div className={styles.boxDesign}>
                <div className={styles.roundebox}>
                  <div className={styles.innerbox}>
                    <img src={coreIocn1} />
                  </div>
                </div>
                <h4>Making Decisions
                  Guided by Our Core
                  Value System</h4>
                <p>At KDR Group, we strive to make
                  decisions that are based on sound
                  principles and evidence. We evaluate
                  the potential short and long-term
                  impacts of our decisions and ensure
                  that they align with our core values.</p>
              </div>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.boxDesign}>
                <div className={styles.roundebox2}>
                  <div className={styles.innerbox2}>
                    <img src={coreIcon2} />
                  </div>
                </div>
                <h4>Positively Impacting
                  the Society</h4>
                <p>We share a vision to provide people with a better living, and help local communities to grow. We strive to create a positive impact in the world through our work and to contribute to social change</p>
              </div>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.boxDesign}>
                <div className={styles.roundebox}>
                  <div className={styles.innerbox}>
                    <img src={coreIcon3} />
                  </div>
                </div>
                <h4>Being Customer Obsessed</h4>
                <p>At KDR Group, our customers come first. We strive to create an exceptional customer experience by delivering high-quality services and products that meet customer needs.</p>
              </div>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.boxDesign}>
                <div className={styles.roundebox2}>
                  <div className={styles.innerbox2}>
                    <img src={coreIcon4} />
                  </div>
                </div>
                <h4>Nurturing and
                  Thriving on Strong
                  Leadership</h4>
                <p>KDR Group is built on strong leadership that guides us in pursuing our mission and values. We foster an environment where innovation and collaboration are encouraged, and our team is empowered to make decisions that are in line with our core values.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teambox}>
        <div className={styles.teamboxheading} >
          <div className='container'>
            <h4>Management - Team</h4>
            <p>KDR Group is run by a highly experienced and knowledgeable management team. Our team of experienced professionals is committed to helping clients achieve their goals and drive business success. With a focus on innovation, collaboration, and customer service, our management team works to ensure our clients' needs are met.</p>
          </div>
        </div>
        <div className={styles.bglinebox}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.subgrid}>
                <img src={Group1} />
              </div>
              <div className={styles.subGrid}>
                <h5>Puneet Gorawara</h5>
                <span>Managing Partner</span>
                <p>Puneet Gorawara CCIM is the Managing Partner of KDR Group, a multi-family investment firm with 18 years of expertise in the acquisition, financing, management, and disposition of properties. Puneet, who moved to the US in the late 90s, has built a strong network of High Net Worth (“HNW”) equity investors, real estate brokers, and mortgage brokers. His prior experience in business process engineering with clients such as AOL/ Time Warner, Oracle, Beckman & Coulter, AT&T, and the University of Alabama has been instrumental in the success of KDR Group. Puneet holds a degree in Chemical Engineering from IIT Varanasi, India (1985), and is a Certified Commercial Investment Member (CCIM).</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bglinebox}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.subgrid}>
                <img src={Group1} />
              </div>
              <div className={styles.subGrid}>
                <h5>Puneet Gorawara</h5>
                <span>Managing Partner</span>
                <p>Puneet Gorawara CCIM is the Managing Partner of KDR Group, a multi-family investment firm with 18 years of expertise in the acquisition, financing, management, and disposition of properties. Puneet, who moved to the US in the late 90s, has built a strong network of High Net Worth (“HNW”) equity investors, real estate brokers, and mortgage brokers. His prior experience in business process engineering with clients such as AOL/ Time Warner, Oracle, Beckman & Coulter, AT&T, and the University of Alabama has been instrumental in the success of KDR Group. Puneet holds a degree in Chemical Engineering from IIT Varanasi, India (1985), and is a Certified Commercial Investment Member (CCIM).</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bglinebox}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.subgrid}>
                <img src={Group1} />
              </div>
              <div className={styles.subGrid}>
                <h5>Puneet Gorawara</h5>
                <span>Managing Partner</span>
                <p>Puneet Gorawara CCIM is the Managing Partner of KDR Group, a multi-family investment firm with 18 years of expertise in the acquisition, financing, management, and disposition of properties. Puneet, who moved to the US in the late 90s, has built a strong network of High Net Worth (“HNW”) equity investors, real estate brokers, and mortgage brokers. His prior experience in business process engineering with clients such as AOL/ Time Warner, Oracle, Beckman & Coulter, AT&T, and the University of Alabama has been instrumental in the success of KDR Group. Puneet holds a degree in Chemical Engineering from IIT Varanasi, India (1985), and is a Certified Commercial Investment Member (CCIM).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Osbox}>
        <div className='container'>
          <div className={styles.headings}>
            <h4>Organization Structures</h4>
            <img src={Logo} />
          </div>
          <div className={styles.gridrow}>
            <div className={styles.subgrid}>
              <div className={styles.boxbule}>
              <div className={styles.roundboxshap}></div>
                <img src={OS1} />
                <h4>KDR Realty Management</h4>
                <p>In House management and maintenance of all properties with support services in india</p>
              </div>
            </div>
            <div className={styles.subgrid}>

              <div className={styles.boxbule}>
              <div className={styles.roundboxshap}></div>
                <img src={OS1} />
                <h4>KDR Equity Finance</h4>
                <p>General Partner and managing member of all the legal entities and acquisition vehicles</p>
              </div>
            </div>
            <div className={styles.subgrid}>
              <div className={styles.boxbule}>
              <div className={styles.roundboxshap}></div>
                <img src={OS1} />
                <h4>KDR Services Maintenance</h4>
                <p>18 years of experience in portfoilo management including acquisitions, management and manitenance of multifamily residential real estate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}
