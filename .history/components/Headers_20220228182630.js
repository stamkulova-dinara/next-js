import Image from "next/image";
import styles from '../styles/headers.module.scss'
import logo from '../public/image.svg'
import Contact from "./Contact";

function Headers() {
    return (
        <div className={styles.content}>
            <div className={styles.logo}>
                <Image src={kabarImage} className={styles.kabarImage}/>
            </div>
            <div className={styles.contact}>
                <Contact/>
            </div>
        </div>
    )
}

export  default Headers