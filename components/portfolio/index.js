import React, { useEffect, useMemo, useState } from 'react'
import styles from './portfolio.module.scss';
import Footer from '../footer';
import Header from '../header';
import { client } from '../../client';
const Imagone = '/assets/images/Imagone.png'

export default function Portfolio() {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    client.getEntries()
      .then((entry) => {
        const { items } = entry;
        setDataList(items);
      })
      .catch(console.error)
  }, [])
  const renderData = useMemo(() => {
    return dataList.map(d => {
      const { fund, fundType, image, irr, multiple, title } = d.fields;
      return (
        <div className={styles.px4} >
          <div className={styles.cardBg}>
            <div className={styles.cartImage}>
              <div className={styles.Imagehover}>
                <img src={Imagone} />
                <div className={styles.backgroundlr}>
                  <button>Learn More</button>
                </div>
              </div>
              <div className={styles.tag}>{fundType?fundType:'-'}</div>
              <h4>{title ? title : '-'}</h4>
            </div>
            <div className={styles.boxline}>
              <div className={styles.boxbottom}>
                <span>Fund</span>
                <p>{fund ? fund : '-'}</p>
              </div>
              <div className={styles.boxbottom}>
                <span>IRR</span>
                <h6>{`${irr ? irr : '-'}%`}</h6>
              </div>
              <div className={styles.boxbottom}>
                <span>Multiple</span>
                <p>{`${multiple ? multiple : '-'}x`}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }, [dataList])
  return (
    <>
      <div>
        <Header />
        <div className={styles.aboutsBanner}>
          <h5>Current Portfolio</h5>
        </div>

        <div className={styles.currentportfolio}>
          <div className="container">
            <div className={styles.portfolioslider}>
              {renderData}
            </div>
            <div className={styles.viewMoreBtn}>
              <button>VIEW MORE</button>
            </div>
          </div>
        </div>
        <Footer />

      </div>
    </>
  )
}
