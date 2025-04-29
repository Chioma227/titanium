'use client'
import { useEffect, useRef, useState } from "react"
import styles from "../../styles/hero.module.css"
import Navbar from "../navbar/Navbar";
import { FiPlay } from "react-icons/fi";

// Define the tabs for the bottom section
const tabs = ["Multi-agent services", "New minds, new markets", "Age of gen AI", "Cognizant Moment"]

// Content for each slide
const slideContent = [
    {
        heading: "How are AI-empowered customers shaping tomorrow's markets?",
        subheading:
            "We're entering another new era of commerce—one where consumers, along with their AI agent counterparts, dictate the rules of engagement.",
    },
    {
        heading: "Transforming businesses with intelligent automation",
        subheading:
            "Discover how our AI-driven solutions are helping organizations streamline operations and drive innovation across industries.",
    },
    {
        heading: "Building the digital foundation for future growth",
        subheading:
            "Our expertise in emerging technologies enables businesses to stay ahead in an increasingly competitive landscape.",
    },
    {
        heading: "Building the digital foundation for future growth",
        subheading:
            "Our expertise in emerging technologies enables businesses to stay ahead in an increasingly competitive landscape.",
    },
]

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState(0)
    const [currentImage, setCurrentImage] = useState(0)
    const [textState, setTextState] = useState("visible")
    const [currentText, setCurrentText] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const images = [
        "https://res.cloudinary.com/dswi7h0dg/image/upload/v1745930582/cognizant-4_dphmjq.webp",
        "https://res.cloudinary.com/dswi7h0dg/image/upload/v1745930582/cognizant-1_wgogyo.webp",
        "https://res.cloudinary.com/dswi7h0dg/image/upload/v1745930582/cognizant-2_canlzl.webp",
        "https://res.cloudinary.com/dswi7h0dg/image/upload/v1745930582/cognizant-3_eeefoh.webp"
    ]

    const clipPathRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const changeSlide = (nextIndex: number) => {
        if (nextIndex === currentImage) return

        setTextState("exiting")

        setTimeout(() => {
            setCurrentImage(nextIndex)
            setCurrentText(nextIndex)
            setTextState("entering")

            setTimeout(() => {
                setTextState("visible")
            }, 500)
        }, 500)
    }

    const handleIndicatorClick = (index: number) => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }

        changeSlide(index)

        if (isAutoPlaying) {
            startAutoPlay()
        }
    }

    const startAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        intervalRef.current = setInterval(() => {
            const nextIndex = (currentImage + 1) % images.length
            changeSlide(nextIndex)
        }, 10000)
    }

    useEffect(() => {
        startAutoPlay()

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [currentImage, images.length])

    const handleTabChange = (index: number) => {
        setActiveTab(index)
    }

    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                {/* Desktop Layout (above 1002px) */}
                <div className={styles.desktopLayout}>
                    {/* Dark blue background */}
                    <div className={styles.blueBg}></div>

                    {/* Angled clip path overlay */}
                    <div ref={clipPathRef} className={styles.clipPathOverlay}></div>

                    {/* Image container with transition */}
                    <div className={styles.imageContainer}>
                        {images.map((src, index) => (
                            <div key={index} className={styles.imageWrapper} style={{ opacity: currentImage === index ? 1 : 0 }}>
                                <img
                                    src={src || "/placeholder.svg"}
                                    alt={`Hero image ${index + 1}`}
                                    style={{ objectFit: "cover", width: '100%', height: "100%" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.mobileLayout}>
                    <div className={styles.mobileBackgroundContainer}>
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={styles.mobileBackgroundImage}
                                style={{
                                    opacity: currentImage === index ? 1 : 0,
                                    backgroundImage: `url(${src})`,
                                }}
                            >
                                <div className={styles.mobileOverlay}></div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.carouselIndicators}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.indicator} ${currentImage === index ? styles.activeIndicator : ""}`}
                                onClick={() => handleIndicatorClick(index)}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textContent}>
                        <div className={`${styles.textWrapper} ${styles[textState]}`}>
                            <h1 className={styles.heading}>{slideContent[currentText].heading}</h1>
                            <p className={styles.subheading}>{slideContent[currentText].subheading}</p>
                        </div>
                    </div>
                    <button className={styles.ctaButton}>
                        Get the report <FiPlay size={20}/>
                    </button>
                </div>
                <div className={styles.tabsContainer}>
                    <div className={styles.tabsWrapper}>
                        <div className={styles.tabsContent}>
                            <div className={styles.arrowIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 9L12 15L18 9"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className={styles.tabs}>
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
                                        onClick={() => handleTabChange(index)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.secondHero}>
                <p>Cognizant helps companies modernize <span>technology</span>, reimagine <span>processes</span> and transform <span>experiences</span> so they stay ahead in a fast-changing world.</p>
            </section>
        </>
    )
}
