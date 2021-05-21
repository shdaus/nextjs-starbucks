import styles from './heading.module.scss'

export default function Heading({type, children}) {
   
    switch (type) {
        case "h1":
            return <h1 className={styles.heading1}> {children} </h1>
        case "h2":
            return <h2 className={styles.heading2}> {children} </h2>
        case "h3":
            return <h3 className={styles.heading3}> {children} </h3>
        case "h4":
            return <h4 className={styles.heading4}> {children} </h4>
        default :
        return <p>The heading type that you provided does not match the expected heading.</p>
            break;
    }

    
}