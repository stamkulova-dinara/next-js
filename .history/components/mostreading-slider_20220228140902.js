import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { ButtonBase } from "@material-ui/core";
import ReactPlayer from "react-player";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from "next/image";
import share from '../public/share.png'
import styles from '../styles/slider.module.scss'

const Sliders = () => {
    const [res, setRes] = useState([])
    const [interest, setInterest] = useState([])
    const sliderRef = useRef(null);

    const fetchActualData = async () => {
        const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/most-viewed/')
        const data = await respon.json()
       setRes(data.results)
    }

    const fetchInterestData = async () => {
      const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/interesting/')
      const data = await respon.json()
     setInterest(data.results)
  }

    useEffect(() => {
      fetchInterestData()
      fetchActualData()
    }, []);
  return (
    <>
    <div>
      <h1 style={{ color: '#C60100' }}>Областтар</h1>
      <div>
        <button className={styles.btn}>Ош</button>
        <button className={styles.btn}>Чуй</button>
        <button className={styles.btn}>Джалал-Абад</button>
        <button className={styles.btn}>Нарын</button>
        <button className={styles.btn}>Талас</button>
        <button className={styles.btn}>Ыссык-Кол</button>
        <button className={styles.btn}>Баткен</button>

      </div>
    </div>
    <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <h1 style={{ color: '#C60100' }}>Эн окумдуу</h1>
      <div style={{ display: "flex" }}>
        <ButtonBase
          style={{
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            borderRadius: 7,
            boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
            cursor: "pointer",
          }}
          className="buttons"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIos />
        </ButtonBase>
        <ButtonBase
          style={{
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 7,
            boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
            cursor: "pointer",
          }}
          className="buttons"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIos />
        </ButtonBase>
      </div>
    </div>
    <div>
      <Slider
        dots
        dotsClass="slick-dots line-indicator"
        ref={sliderRef}
        slidesToShow={4}
        slidesToScroll={1}
        customPaging={(i) => (
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "-10px",
              opacity: 0,
            }}
          >
            {i}
          </div>
        )}
      >
        {interest.map((el) => (
            <div>
                  <img src={el.images[0].image} style={{ width: '250px', height: '180px', borderRadius: '10px' }}/>
                
              ) : (
                <ReactPlayer
                url={el.media.video}
                width='250px'
                height='180px'
                />
              )}
              <div style={{width: '250px', height: '150px', padding: '0 10px'}}>
                  <h4>{el.region}</h4>
                  <h3>{el.title}</h3>
              </div>
              <div className={styles.card_actions}>
                <span>2022-02-22</span>
                <div className={styles.cv}>
              <VisibilityIcon className={styles.eyes}/>
              <div id={styles.view}>{el.viewed}</div>
              </div>
              <div className={styles.share}><Image className={styles.img} src={share}/></div>

              </div>
            </div>
          ))}
      </Slider>
    </div>
  </div>
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <h1 style={{ color: '#C60100' }}>Эн кызыктуу</h1>
      <div style={{ display: "flex" }}>
        <ButtonBase
          style={{
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
            borderRadius: 7,
            boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
            cursor: "pointer",
          }}
          className="buttons"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ArrowBackIos />
        </ButtonBase>
        <ButtonBase
          style={{
            width: 35,
            height: 35,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 7,
            boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
            cursor: "pointer",
          }}
          className="buttons"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ArrowForwardIos />
        </ButtonBase>
      </div>
    </div>
    <div>
      <Slider
        dots
        dotsClass="slick-dots line-indicator"
        ref={sliderRef}
        slidesToShow={4}
        slidesToScroll={1}
        customPaging={(i) => (
          <div
            style={{
              position: "absolute",
              width: "100%",
              top: "-10px",
              opacity: 0,
            }}
          >
            {i}
          </div>
        )}
      >
        {res.map((el) => (
            <div>
                   {el.media == null ? (
                  <img src={el.images[0].image} style={{ width: '250px', height: '180px', borderRadius: '10px' }}/>
                
              ) : (
                <ReactPlayer
                url={el.media.video}
                width='250px'
                height='180px'
                />
              )}
              <div style={{width: '250px', height: '150px', padding: '0 10px'}}>
                  <h4>{el.region}</h4>
                  <h3>{el.title}</h3>
              </div>
              <div className={styles.card_actions}>
                <span>2022-02-22</span>
                <div className={styles.cv}>
              <VisibilityIcon className={styles.eyes}/>
              <div id={styles.view}>{el.viewed}</div>
              </div>
              <div className={styles.share}><Image className={styles.img} src={share}/></div>

              </div>
            </div>
          ))}
      </Slider>
    </div>
  </div>
  </>
  )
}

export default Sliders