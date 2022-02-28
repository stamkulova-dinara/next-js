import React, { useEffect, useState } from "react";
import { getInterest } from "../containers/httpRequest";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/interest.module.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Image from "next/image";
import share from '../public/share.png'

export async function getServerSideProps() {
  const respon = await fetch('http://api.kabar-media.kg/api/v1/articles/interesting/')
  const json = await respon.json()
  const data = json.results

  return {
    props: {
      interest: data,
    },
  };
}

const InterestingPosts = ({ interest }) => {
 
  console.log(interest);
  return (
    <div className={styles.container}>
      <h1>Эн кызыктуу</h1>
      <div className={styles.cards}>
        {interest.map((el)=> {
          return(
            <Card className={styles.root}>
          <CardActionArea>
            <img src={el.images[0].image} className={styles.image}/>
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
          )
        })}
        </div>
    </div>
  );
};

export default InterestingPosts;
