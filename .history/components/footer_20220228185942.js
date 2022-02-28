import styles from '../styles/footer.module.scss'
import Contact from './Contact';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/image.svg'

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.navbar}>
                    <div>
                        <Image src={logo}/>
                        <div style={} className={styles.contact_link}>
                          <Contact/>
                        </div>
                        <p>"Кабар Медиа" эл чындыкты билсин!</p>
                    </div>
                    <div className={styles.menu}>
                        <h2>Меню</h2>
                        <ul>
                            <li>
                               <Link href={'/'}>Башкы бет</Link> 
                            </li>
                            <li>
                             <Link href={'/interesting-posts'}>Кызыктуулар</Link>
                            </li>
                            <li>
                                <Link href={'/mostreading-posts'}>Эн коп окулгандар</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <h1>Биз менен байланышуу</h1>
                    </div>
            </div>
            <div className={styles.content}>
                <p>©2022 Баардык укуктар корголгон</p>
            </div>
        </footer>
    )
}

export  default Footer