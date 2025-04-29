import CaseStudyCard from "./CaseStudyCard"
import styles from "../../styles/case-studies.module.css"

export default function CaseStudiesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Case studies</h1>
      <p className={styles.subheading}>We help companies anticipate and act with insight and speed.</p>

      <div className={styles.grid}>
        <CaseStudyCard
          category="HEALTHCARE"
          title="Healthcare organization unloads technical debt"
          description="PacificSource cuts technical debt and raises member loyalty."
          image="https://res.cloudinary.com/dswi7h0dg/image/upload/v1745944900/case-study_fowpzm.webp"
        />

        <CaseStudyCard
          category="HEALTHCARE"
          title="MedPartners powers business expansion"
          description="Strategic technology implementation enables rapid growth and improved patient outcomes."
          image="https://res.cloudinary.com/dswi7h0dg/image/upload/v1745965846/case-study-3_jzbjeo.webp"
        />

        <CaseStudyCard
          category="FINANCE"
          title="Global bank transforms customer experience"
          description="Digital transformation initiative leads to 40% increase in customer satisfaction."
          image="https://res.cloudinary.com/dswi7h0dg/image/upload/v1745965847/casee-study-2_vbtf1o.webp"
        />

        <CaseStudyCard
          category="TECHNOLOGY"
          title="Tech giant streamlines operations"
          description="AI-powered workflow automation reduces operational costs by 35%."
          image="https://res.cloudinary.com/dswi7h0dg/image/upload/v1745965847/case-study-4_ffh6zi.webp"
        />
      </div>
    </div>
  )
}

// https://www.cognizant.com/us/media_12c36649101fef3776b572f1f04d23b70b9180a17.png?width=750&format=png&optimize=medium