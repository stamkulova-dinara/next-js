import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from '../styles/contact.module.scss'
import { useEffect } from 'react';

const Contact = () => {
  const media = async () => {
    const data = await fetch('http://api.kabar-media.kg/api/v1/medias/')
  }

  useEffect(())
  return (
    <div>
        <InstagramIcon className={styles.icon_contact}/>
        <FacebookIcon className={styles.icon_contact}/>
        <YouTubeIcon className={styles.icon_contact}/>
        <TelegramIcon className={styles.icon_contact}/>
    </div>
  )
}

export default Contact