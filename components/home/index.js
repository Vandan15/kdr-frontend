import React from 'react'
import styles from './home.module.scss';
import Footer from '../footer';
import Header from '../header';
import Slider from 'react-slick';
// import Aboutus from '../Aboutus';
import Career from '../career';
import Aboutus from '../aboutus';
const LeftIcon = '/assets/images/slider-left.svg';


const BannerImage = '/assets/images/BannerBg.png'
const FirstBannerImag = '/assets/images/FirstBannerImag.png'
const Imagone = '/assets/images/Imagone.png'
const Group1 = '/assets/images/Group1.png'
const Ch1 = '/assets/images/Ch1.png'
const Ch2 = '/assets/images/ch2.png'
const Ch3 = '/assets/images/ch3.png'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='slider-right-design'

      onClick={onClick}
    >
      <svg width="16" height="27" viewBox="0 0 16 27" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.426 26.8346C12.8496 26.8378 12.2957 26.6117 11.8867 26.2059L1.04541 15.3646C0.641414 14.9585 0.414917 14.4089 0.414917 13.8361C0.414917 13.2634 0.641414 12.7138 1.04541 12.3077L11.8867 1.46641C12.4446 0.988367 13.2072 0.825753 13.9117 1.0341C14.6163 1.24245 15.1677 1.79382 15.376 2.49837C15.5844 3.20291 15.4217 3.96553 14.9437 4.52343L5.64217 13.825L14.9437 23.1265C15.352 23.5312 15.5825 24.0818 15.5851 24.6568C15.5873 25.2318 15.3611 25.7843 14.9564 26.1926C14.5513 26.6009 14.0011 26.8314 13.4261 26.8339L13.426 26.8346Z" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='slider-arrow-design'

      onClick={onClick}
    >
      <svg width="16" height="27" viewBox="0 0 16 27" fill='#000' xmlns="http://www.w3.org/2000/svg">
        <path d="M13.426 26.8346C12.8496 26.8378 12.2957 26.6117 11.8867 26.2059L1.04541 15.3646C0.641414 14.9585 0.414917 14.4089 0.414917 13.8361C0.414917 13.2634 0.641414 12.7138 1.04541 12.3077L11.8867 1.46641C12.4446 0.988367 13.2072 0.825753 13.9117 1.0341C14.6163 1.24245 15.1677 1.79382 15.376 2.49837C15.5844 3.20291 15.4217 3.96553 14.9437 4.52343L5.64217 13.825L14.9437 23.1265C15.352 23.5312 15.5825 24.0818 15.5851 24.6568C15.5873 25.2318 15.3611 25.7843 14.9564 26.1926C14.5513 26.6009 14.0011 26.8314 13.4261 26.8339L13.426 26.8346Z" />
      </svg>
    </div>
  );
}

export default function HomePage() {

  var settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>

      <div>
        <Header />
        <div className={styles.HeroBanner}>
          <div className={styles.bannerImage}>
            <img src={BannerImage} />
          </div>
          <div className={styles.bannerText}>
            <div className="container">
              <div className={styles.bannerGrid} >
                <div className={styles.subGrid}>
                  <div className={styles.textbox}>
                    <h1>Wealth protection. <br /> <span>Wealth generation.</span></h1>
                    <p>Private Real Estate Investments for
                      Accredited Investors</p>
                    <button>VIEW OUR PRODUCTS</button>
                  </div>
                </div>
                <div className={styles.subGrid}>
                  <img src={FirstBannerImag} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.currentportfolio}>
          <div className="container">
            <div className={styles.titleheading}>
              <h3>Current Portfolio</h3>
            </div>

            <div className={styles.portfolioslider}>

              <Slider {...settings}>
                <div className={styles.px4} >

                  <div className={styles.cardBg}>
                    <div className={styles.cartImage}>
                      <div className={styles.Imagehover}>
                        <img src={Imagone} />
                        <div className={styles.backgroundlr}>
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className={styles.tag}>EQUITY</div>
                      <h4>Woodland trace apart</h4>
                    </div>
                    <div className={styles.boxline}>
                      <div className={styles.boxbottom}>
                        <span>Fund</span>
                        <p>Fund III</p>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>IRR</span>
                        <h6>12%</h6>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>Multiple</span>
                        <p>1.84x</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.px4}>

                  <div className={styles.cardBg}>
                    <div className={styles.cartImage}>
                      <div className={styles.Imagehover}>
                        <img src={Imagone} />
                        <div className={styles.backgroundlr}>
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className={styles.tag}>EQUITY</div>
                      <h4>Woodland trace apart</h4>
                    </div>
                    <div className={styles.boxline}>
                      <div className={styles.boxbottom}>
                        <span>Fund</span>
                        <p>Fund III</p>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>IRR</span>
                        <h6>12%</h6>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>Multiple</span>
                        <p>1.84x</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.px4}>

                  <div className={styles.cardBg}>
                    <div className={styles.cartImage}>
                      <div className={styles.Imagehover}>
                        <img src={Imagone} />
                        <div className={styles.backgroundlr}>
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className={styles.tag}>EQUITY</div>
                      <h4>Woodland trace apart</h4>
                    </div>
                    <div className={styles.boxline}>
                      <div className={styles.boxbottom}>
                        <span>Fund</span>
                        <p>Fund III</p>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>IRR</span>
                        <h6>12%</h6>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>Multiple</span>
                        <p>1.84x</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.px4}>

                  <div className={styles.cardBg}>
                    <div className={styles.cartImage}>
                      <div className={styles.Imagehover}>
                        <img src={Imagone} />
                        <div className={styles.backgroundlr}>
                          <button>Learn More</button>
                        </div>
                      </div>
                      <div className={styles.tag}>EQUITY</div>
                      <h4>Woodland trace apart</h4>
                    </div>
                    <div className={styles.boxline}>
                      <div className={styles.boxbottom}>
                        <span>Fund</span>
                        <p>Fund III</p>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>IRR</span>
                        <h6>12%</h6>
                      </div>
                      <div className={styles.boxbottom}>
                        <span>Multiple</span>
                        <p>1.84x</p>
                      </div>
                    </div>
                  </div>
                </div>



              </Slider>
            </div>

          </div>
        </div>

        <div className={styles.bannerBuleBg} >
          <div className='container'>
            <div className={styles.GridBule}>
              <div className={styles.subBuleGrid}>
                <span>ABOUT US</span>
                <h4>A Trusted Source
                  for Multifamily Living
                  and Investment</h4>
                <button>Learn More</button>
              </div>
              <div className={styles.subBuleGrid}>
                <p>At KDR Group, a good partnership is one where everyone wins together. As newcomers to the United States, we started KDR Group with the goal of growing and protecting our own wealth. We are proud to be the largest investors in the company, and we strive to create real value for our partners.</p>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.groupMain}>
          <div className='container'>
            <div className={styles.GridGroup}>
              <div className={styles.subgrid} >
                <div className={styles.ImageGroop}>
                  <img src={Group1} />
                </div>
              </div>
              <div className={styles.subgrid}>
                <div className={styles.gropbox}>
                  <h4>Why invest with
                    KDR Group?</h4>
                  <p>We’re on a mission to transform the way individuals invest in real estate. We believe that a good partnership is one where everyone wins together.</p>
                  <div className={styles.boxGrid}>
                    <div className={styles.boxsunGrid}>
                      <div className={styles.boxbg}>

                        <h5>22.65%</h5>
                        <p> AVERAGE GROSS IRR</p>
                      </div>
                    </div>
                    <div className={styles.boxsunGrid}>
                      <div className={styles.boxbg}>
                        <h5>$75M</h5>
                        <p> CEO CO-INVESTMENT</p>
                      </div>
                    </div>
                    <div className={styles.boxsunGrid}>
                      <div className={styles.boxbg}>
                        <h5>$1.8B</h5>
                        <p> ASSETS
                          UNDER MANAGEMENT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.choice}>
          <div className="container">
            <div className={styles.hedings}>
              <h5>BEST CHOICE</h5>
              <h3>Our Startegy</h3>
            </div>
            <div className={styles.choiceGrid}>
              <div className={styles.subgrid}>
                <div className={styles.boxdesign}>
                  <div className={styles.boxround}>
                    <div className={styles.innerRound}>

                      <img src={Ch1} />
                    </div>
                  </div>
                  <h4>Capital Raising</h4>
                </div>
              </div>
              <div className={styles.subgrid}>
                <div className={styles.boxdesign}>
                  <div className={styles.boxround}>
                    <div className={styles.innerRound}>

                      <img src={Ch2} />
                    </div>
                  </div>
                  <h4>Equity and Acquisitions</h4>
                </div>
              </div>
              <div className={styles.subgrid}>
                <div className={styles.boxdesign}>
                  <div className={styles.boxround}>
                    <div className={styles.innerRound}>

                      <img src={Ch3} />
                    </div>
                  </div>
                  <h4>Property Management</h4>
                </div>
              </div>
              <div className={styles.borderline} ></div>
            </div>
          </div>
        </div>

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

        <div className={styles.boxgreen}>
          <div className='container'>
            <div className={styles.greenBox}>
              <h3>Explore our open private real
                estate investments.</h3>

              <button>EXPLORE OFFERING</button>

            </div>
          </div>
        </div>

        <Footer />

      </div>

      {/* <Career/> */}
      {/* <Aboutus/> */}
    </>
  )
}
