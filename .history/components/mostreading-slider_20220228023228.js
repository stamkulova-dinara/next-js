import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { ButtonBase } from "@material-ui/core";
import ReactPlayer from "react-player";
import styles from '../styles/slider.module.scss'

const MostreadingSlider = () => {
    const [res, setRes] = useState([])
    const sliderRef = useRef(null);

    const fetchData = async () => {
        const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/most-viewed/')
        const data = await respon.json()
       setRes(data.results)
        // console.log(respon)
    }

    useEffect(() => {
        fetchData()
    //   console.log(sliderRef);
    }, []);
  return (
    <div>
    {/* <h1>Ipl</h1> */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
      }}
    >
      <h1 style={{ fontStyle: "italic" }}>Match Highlights</h1>
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
        slidesToShow={3}
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
                {/* <img
                  style={{ width: 310, objectFit: "contain", borderRadius: 12 }}
                  src='https://images.unsplash.com/photo-1640622842223-e1e39f4bf627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
                  alt=""
                /> */}
                {el.media == null ? (
                  <img src={el.images[0].image} style={{ width: '310px', height: '180px' }}/>
                
              ) : (
                <ReactPlayer
                url={el.media.video}
                width='310px'
                height='180px'
                />
              )}
              <div>
                  <h5>{el.region}</h5>
                  <h3>{el.title}</h3>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  </div>
  )
}

export default MostreadingSlider