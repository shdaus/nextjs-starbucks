import { motion } from "framer-motion"
import Link from 'next/link'
import styles from './navoverlay.module.scss'
import ButtonUI from './buttonui'

export default function NavOverlay ({ closeClickHandler}) {
    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
      }
    
    return (
        <motion.div 
            className={styles.nav_overlay} 
            initial="hidden"
            animate= "visible"
            variants={variants}
        >
        <div>
            <nav className={styles.nav_overlay_menu}>
            <ButtonUI 
                icon="close" 
                clickHandler={closeClickHandler}
                />
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/locations">
                            <a>Locations</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/people">
                            <a>People</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
            
        </motion.div>   
    )
}