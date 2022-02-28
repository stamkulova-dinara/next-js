import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import ReactPlayer from "react-player";
import share from '../public/share.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useRouter from 'next/router'
import Sliders from "../components/mostreading-slider";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

export async function getServerSideProps() {
  const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/')
  const json = await respon.json()

  const respon2 = await fetch('http://api.kabar-media.kg/api/v1/categories/')
  const json2 = await respon2.json()

  const sliderRespon = await fetch('http://api.kabar-media.kg/api/v1/article/17/')
  const resultJson = await sliderRespon.json()

  return {
    props: {
      news: json,
      categories: json2,
      carouselSlide: resultJson,
    },
  };
}

export default function Home({ news, categories, carouselSlide }) {
  const [inputValue, setInputValue] = useState('')
  const [categoryId, setCategoryId] = useState(0);
  const [infoInCategory, setInfoInCategory] = useState(news);

  const router = useRouter

  console.log(carouselSlide);

  const categoryEventFetch = async () => {
    const response = await fetch(`http://api.kabar-media.kg/api/v1/articles/?category=${categoryId}`)
    const json = await response.json()
    setInfoInCategory(json)
    router.push('/?category='+ categoryId, undefined, {shallow: true})
  }

  return (
    <div className={styles.container}>
      <input
      onChange={() => setInputValue()}
      value={}
      />
      <div className={styles.categories}>
        <button className={styles.btn_home} onClick={() => setInfoInCategory(news)}>
          <Link href={'/'}>Башкы бет</Link>
          </button>
        {categories.map((category) => {
          return (
              <button className={styles.btn} onClick={categoryEventFetch} onFocus={() => setCategoryId(category.id)}>
                {category.title}
              </button>
          );
        })}
      </div>
      <h1 className={styles.theme}>Акыркы жанылыктар</h1>
      <div style={{display: 'flex', justifyContent: 'start'}}>
        <div className={styles.vertical_new}>
          {infoInCategory.map((el) => {
            return (
              <div>
                <div className={styles.news}>
                  <div>
                    {el.media == null ? (
                      <img src={el.images[0].image} className={styles.image} />
                    ) : (
                      <ReactPlayer
                        url={el.media.video}
                        width="170px"
                        height="120px"
                      />
                    )}
                  </div>
                  <div className={styles.infoNew}>
                    <h2>
                      <Link href={"/article/" + el.id}>{el.title}</Link>
                    </h2>
                    <div className={styles.card_actions}>
                      <span>2022-02-21</span>
                      <div className={styles.cv}>
                        <VisibilityIcon className={styles.eyes} />
                        <div id={styles.view}>{el.viewed}</div>
                      </div>
                      <div className={styles.share}>
                        <Image className={styles.img} src={share} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.hr}></p>
              </div>
            );
          })}
        </div>
      <div style={{ width: "50%"}}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {carouselSlide.images.map((el) => (
            <div className={styles.image_sliders}>
               <img src={el.image}/>
               <h1>{carouselSlide.title}</h1>
            </div>
          ))
          }
        </Slider>
    </div>
      </div>
      <Sliders/>
    </div>
  );
}
