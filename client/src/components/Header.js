import React from 'react'

import logo from '../images/logo.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Ready to rock Barcelona" />
        <div className={styles.title}>Ready to rock Barcelona</div>
        <div className={styles.subtitle}>
          A tool for browsing and filtering local bands
        </div>
      </div>
    </div>
  )
}

export default Header
