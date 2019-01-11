import React from 'react'
import PropTypes from 'prop-types'
import styles from './Band.module.css'

const Band = ({ title, body, members }) => (
  <div className={styles.band}>
    <h1>{title}</h1>
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
    <div>
      <h2>Members:</h2>
      <span className={styles.members}>
      <ul>
        {members
          ? members.map(member => 
                <li key={member.name} className={styles.member}>
                  {member.name} - {member.instrument}
                </li>
              )
          : 'Unknown members'}
          </ul>
      </span>
    </div>
  </div>
)

Band.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  members: PropTypes.array
}

export default Band
