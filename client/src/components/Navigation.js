import React from 'react'
import PropTypes from 'prop-types'

import styles from './Navigation.module.css'

const Navigation = ({ handleClick, current, size }) => {
  const renderPrevButton = () => {
    if (current !== 0) {
      return (
        <button id="prev" className={styles.button} onClick={handleClick}>
          Prev
        </button>
      )
    }
  }

  const renderNextButton = () => {
    if (current !== size - 1) {
      return (
        <button id="next" className={styles.button} onClick={handleClick}>
          Next
        </button>
      )
    }
  }

  return (
    <div className={styles.navigation}>
      {renderPrevButton()}
      <span className={styles.page}>
        {current + 1} from {size}
      </span>
      {renderNextButton()}
    </div>
  )
}

Navigation.propTypes = {
  current: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Navigation
