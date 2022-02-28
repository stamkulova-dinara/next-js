import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import styles from '../styles/contact'

const Contact = () => {
  return (
    <div>
        <InstagramIcon className={styles.icon_contact}/>
        <FacebookIcon/>
        <YouTubeIcon/>
        <TelegramIcon/>
    </div>
  )
}

export default Contact