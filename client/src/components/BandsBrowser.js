import React, { Component } from 'react'
import BandsList from './BandsList'
import SearchBox from './SearchBox'
import { getBandsIds } from '../api'

import styles from './BandsBrowser.module.css'

class BandsBrowser extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      bandsIds: null
    }
  }

  async componentDidMount() {
    this._isMounted = true
    // init with all the band
    const bandsIds = await getBandsIds()
    if (this._isMounted) {
      bandsIds
        ? this.setState({ bandsIds: bandsIds.data })
        : console.log('Error fetching Bands ID list')
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  handleSearchTermChange = bandsIds => {
    this.setState({ bandsIds: bandsIds.data })
  }

  reloadBrowser = () => {
    window.location.reload()
  }

  render() {
    const { bandsIds } = this.state

    // conditional renderings
    if (bandsIds === null) {
      return <div className={styles.content}>Loading ...</div>
    }
    if (bandsIds.length === 0) {
      return (
        <div className={styles.content}>
          Bands not found.{' '}
          <button className={styles.button} onClick={this.reloadBrowser}>
            Return
          </button>
        </div>
      )
    }

    return (
      <div className={styles.content}>
        <SearchBox onSearchTermChange={this.handleSearchTermChange} />
        <BandsList bandsIds={bandsIds} />
      </div>
    )
  }
}

export default BandsBrowser
