import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import styles from './App.module.css'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Content />
    <Footer />
  </div>
)

export default App
