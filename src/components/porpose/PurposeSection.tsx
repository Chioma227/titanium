import styles from '../../styles/purpose.module.css'
import { FiPlay } from "react-icons/fi";
const PurposeSection = () => {
  return (
    <main className={styles.backgroundImage}>
      <section className={styles.section}>
        <h1>Driving the future of ER&D with Belcan</h1>
        <p>Belcan expands our engineering research and development (ER&D) and IoT capabilities and establishes our leadership in aerospace and defense (A&D).</p>
        <button className={styles.knowMore}>Know more <FiPlay size={23}/></button>
      </section>
    </main>
  )
}

export default PurposeSection
