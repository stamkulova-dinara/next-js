import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import ReactPlayer from "react-player";
import share from '../public/share.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from "next/image";
import useRouter from 'next/router'
import Sliders from "../components/mostreading-slider";

export async function getServerSideProps() {
  const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/')
  const json = await respon.json()

  const respon2 = await fetch('http://api.kabar-media.kg/api/v1/categories/')
  const json2 = await respon2.json()

  const sliderRespon = await fetch('http://api.kabar-media.kg/api/v1/article/17/')
  const

  return {
    props: {
      news: json,
      categories: json2,
    },
  };
}

export default function Home({ news, categories }) {
  const [categoryId, setCategoryId] = useState(0);
  const [infoInCategory, setInfoInCategory] = useState(news);

  const router = useRouter

  console.log(infoInCategory);

  const categoryEventFetch = async () => {
    const response = await fetch(`http://api.kabar-media.kg/api/v1/articles/?category=${categoryId}`)
    const json = await response.json()
    setInfoInCategory(json)
    router.push('/?category='+ categoryId, undefined, {shallow: true})
  }


  console.log(categoryId);
  return (
    <div className={styles.container}>
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
      <div>
        <h1 className={styles.theme}>Акыркы жанылыктар</h1>
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
      </div>
      <Sliders/>
    </div>
  );
}
