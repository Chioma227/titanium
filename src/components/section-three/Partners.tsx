import styles from'../../styles/partners.module.css'
import { FiPlay } from "react-icons/fi";

const Partners = () => {
  return (
    <main className={styles.container}>
       <section className={styles.section}>
        <h1>
        Partnering with World Economic Forum to improve everyday life</h1>
        <p>We’re partnering with WEF to chart new paths to progress on complex global challenges like responsible AI, education and skilling for tomorrow’s workforce and advancing the energy transition.</p>
        <button className={styles.discover}>Discover new thinking <FiPlay size={25} /></button>
      </section>
    </main>
  )
}

export default Partners
