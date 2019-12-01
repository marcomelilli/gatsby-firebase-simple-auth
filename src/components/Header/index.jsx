import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          Gatsby Firebase Auth
        </Link>
      </h1>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/" className={styles[`header__link`]}>
          Home
        </Link>
        <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
