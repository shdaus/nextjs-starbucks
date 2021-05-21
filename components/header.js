import { useState} from 'react'
import Container from '../components/container'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'


//custom components
import ButtonUI from './buttonui'
import NavOverlay from './navoverlay'
import Row from './row'

export default function Header() {

    const [isMenuVisible , setIsMenuVisible] = useState(false)

    return (
        <header className={styles.header}>
        <Container>
            <Row justifyContentSpaceBetween>
            <Link href="/">
            <a>
            <Image 
                src="/images/starbucks-logo.svg"
                width={100}
                height={100}
                alt="starbucks logo"
            />
            </a>
            </Link>
            <ButtonUI 
                icon="menu" 
                clickHandler= {()  => {
                    setIsMenuVisible(true)
                    }} />
            {
                isMenuVisible && 
                    <NavOverlay closeClickHandler={() => {
                        setIsMenuVisible(false)
                        }} 
                       /> 
            }
            </Row>
        </Container>
        </header>
    )
}