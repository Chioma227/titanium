import styles from "../../styles/navbar.module.css"
import { SlGlobe } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.topNav}>
                <a href="#" className={styles.navLink}>
                    Careers
                </a>
                <a href="#" className={styles.navLink}>
                    News
                </a>
                <a href="#" className={styles.navLink}>
                    Events
                </a>
                <a href="#" className={styles.navLink}>
                    Investors
                </a>
                <div className={styles.languageSelector}>
                    <span className={styles.globeIcon}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
                            <path
                                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                        US-EN
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className={styles.mainNav}>
                <div className={styles.navLeft}>
                    <FaBars color="#000048" size={20} className={styles.barIcon} />
                    <a href="/" className={styles.logo}>
                        <img src="https://res.cloudinary.com/dswi7h0dg/image/upload/v1745932322/cognizant_bh2l5f.svg" alt="Cognizant Logo" width={200} height={30} />
                    </a>
                    <nav className={styles.navLinks}>
                        <a href="#" className={styles.mainNavLink}>
                            Industries
                        </a>
                        <a href="#" className={styles.mainNavLink}>
                            Services
                        </a>
                        <a href="#" className={styles.mainNavLink}>
                            Insights
                        </a>
                        <a href="#" className={styles.mainNavLink}>
                            About
                        </a>
                    </nav>
                </div>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Search" className={styles.searchInput} />
                    <svg
                        className={styles.searchIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className={styles.searchWrapper}>
                    <HiOutlineSearch color="#000048" size={20} />
                    <SlGlobe color="#000048" size={20} />
                </div>
            </div>
        </div>
    )
}
