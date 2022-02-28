import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from '../styles/contact.module.scss'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [siteUrl, setSiteUrl] = useState([])

  const media = async () => {
    const dataMedia = await fetch('http://api.kabar-media.kg/api/v1/medias/')
    const json = await dataMedia.json()
    setSiteUrl(json)
    console.log(siteUrl)
  }

  useEffect(() => {
    media()
  }, [])
  return (
    <div className={s}>
      {siteUrl.map((el) => (
        <>
        <a target='_blank' href={el.instagram}>
        <InstagramIcon className={styles.icon_contact}/>
        </a>
         <a target='_blank' href={el.facebook}>
         <FacebookIcon className={styles.icon_contact}/>
         </a>
          <a target='_blank' href={el.youtube}>
          <YouTubeIcon className={styles.icon_contact}/>
          </a>
         <a target='_blank' href={el.telegram}>
         <TelegramIcon className={styles.icon_contact}/>
         </a>
         </>
      ))}
      {/* <Link>
      <InstagramIcon className={styles.icon_contact}/>
      </Link>
       <Link>
       <FacebookIcon className={styles.icon_contact}/>
       </Link>
        <Link>
        <YouTubeIcon className={styles.icon_contact}/>
        </Link>
       <Link>
       <TelegramIcon className={styles.icon_contact}/>
       </Link> */}

    </div>
  )
}

export default Contact