"use client";

import { useState } from "react"
import styles from "../../styles/case-study-card.module.css"
import Image from "next/image";

interface CaseStudyCardProps {
    category: string
    title: string
    description: string
    image: string
    link?: string
}

export default function CaseStudyCard({ category, title, description, image}: CaseStudyCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <Image width={100} height={100} src={image || ""} alt={title} style={{ objectFit: "cover", height:"100%", width:'100%'}} />

                <div className={`${styles.overlay} ${isHovered ? styles.overlayExpanded : ""}`}>
                    <div className={styles.category}>{category}</div>

                    <h3 className={styles.title}>
                        {title}
                        <svg
                            className={styles.arrow}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </h3>
                </div>
            </div>

            <div className={styles.content}>
                <p className={`${styles.description} ${isHovered ? styles.descriptionVisible : ""}`}>{description}</p>
            </div>
        </div>
    )
}
