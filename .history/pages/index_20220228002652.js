import React, { useEffect, useState } from "react";
import {
  getArticle,
  getCategory,
  getCategoryById,
} from "../containers/httpRequest";
import styles from "../styles/home.module.scss";
import Link from "next/link";
import ReactPlayer from "react-player";
import share from '../public/share.png'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from "next/image";
import MostreadingSlider from "../components/mostreading-slider";

export async function getServerSideProps() {
  const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/')
//   const data = respon.results
  const json = await respon.json()
  // const data = json.results

  return {
    props: {
      news: json,
    },
  };
}

export default function Home({ news }) {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);
  const [infoInCategory, setInfoInCategory] = useState(news);

  const category = async () => {
    const data = await getCategory();
    setCategories(data);
    console.log(categories);
  };

  console.log(infoInCategory);

  const categoryEventFetch = async () => {
    const response = await fetch(`http://api.kabar-media.kg/api/v1/articles/?category=${categoryId}`)
    const jso
  }

  const lastNew = async () => {
    const data = await getCategoryById(categoryId);
    // setCategories(data)
    setInfoInCategory(data);
    console.log(infoInCategory);
  };

  console.log(categoryId);
  useEffect(() => {
    category()
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <button className={styles.btn_home}>Башкы бет</button>
        {categories.map((category) => {
          return (
            <div
              className={styles.categor}
              onClick={categoryEventFetch}
              key={category.id}
            >
              {() => setCategoryId(category.id)}
              <button className={styles.btn} onClick={() => setCategoryId(category.id)}>
                {category.title}
              </button>
            </div>
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
      <MostreadingSlider/>
    </div>
  );
}
