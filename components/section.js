import styles from './section.module.scss'
import Heading from './heading'

export default function Section ({children, title}) {
    return (
        <section className={styles.section}>
            <Heading type="h2">{ title } </Heading>
            {children}
        </section>
    )
}