import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from '../styles/contact.module.scss'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [siteUrl, setSiteUrl] = useState(null)

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
    <div>
      {siteUrl.map((el) => (
        <>
        <a  href={el.instagram}>
        <InstagramIcon className={styles.icon_contact}/>
        </a>
         {/* <Link>
         <FacebookIcon className={styles.icon_contact}/>
         </Link>
          <Link>
          <YouTubeIcon className={styles.icon_contact}/>
          </Link>
         <Link>
         <TelegramIcon className={styles.icon_contact}/>
         </Link> */}
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