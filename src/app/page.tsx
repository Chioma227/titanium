import HeroSection from "@/components/hero/Hero";
import styles from "./page.module.css";
import PurposeSection from "@/components/porpose/PurposeSection";
import CaseStudiesPage from "@/components/case-studies/CaseStudies";
import Partners from "@/components/section-three/Partners";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <PurposeSection />
      <CaseStudiesPage />
      <Partners />
    </div>
  );
}
