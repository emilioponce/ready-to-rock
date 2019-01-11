import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getBandsIdsBySearchTerms } from '../api'

import styles from './SearchBox.module.css'

class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerms: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = e => {
    this.setState({
      searchTerms: e.target.value
    })
  }

  async handleClick() {
    const { searchTerms } = this.state
    const bandsIds = await getBandsIdsBySearchTerms(searchTerms)
    this.props.onSearchTermChange(bandsIds)
  }

  /* Enables searching by pressing enter key */
  handleKeyPressed = e => {
    var code = e.keyCode || e.which
    if (code === 13) {
      //13 = 'Enter' keycode
      this.handleClick()
    }
  }

  render() {
    const { searchTerms } = this.state
    return (
      <div className={styles.searchBox}>
        <div>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter text .."
            value={searchTerms}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPressed}
          />
          <button className={styles.button} onClick={this.handleClick}>
            Search
          </button>
        </div>
      </div>
    )
  }
}

SearchBox.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired
}

export default SearchBox
