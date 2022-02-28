import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import { ButtonBase } from "@material-ui/core";
import ReactPlayer from "react-player";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/interest.module.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from "next/image";
import share from '../public/share.png'

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
    <div style={{ margin: 30 }}>
      <Slider
        dots
        dotsClass="slick-dots line-indicator"
        ref={sliderRef}
        slidesToShow={4}
        slidesToScroll={4}
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
        style={{ width: 310, objectFit: "contain", borderRadius: 10 }}
      >
        {res.map((el) => (
             <Card className={styles.roots}>
             <CardActionArea>
                 {el.media == null ? (
                     <img src={el.images[0].image} className={styles.image}/>
                   
                 ) : (
                   <ReactPlayer
                   url={el.media.video}
                   height='180px'
                   />
                 )}
             <CardContent className={styles.card_content}>
               <Typography gutterBottom variant="h6" component="h3">
                 {el.region}
               </Typography>
               <Typography variant="body2" component="p" className={styles.title}>
                {el.title}
               </Typography>
             </CardContent>
           </CardActionArea>
             <CardActions className={styles.card_actions}>
               <span>2022-02-21</span>
               <div className={styles.cv}>
                 <VisibilityIcon className={styles.eyes}/>
                 <div id={styles.view}>{el.viewed}</div>
                 </div>
                 <div className={styles.share}><Image className={styles.img} src={share}/></div>
               </CardActions>  
             
           </Card>
          ))}
      </Slider>
    </div>
  </div>
  )
}

export default MostreadingSlider