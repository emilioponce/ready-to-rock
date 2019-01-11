import React, { Component } from 'react'
import Band from './Band'
import Navigation from './Navigation'
import PropTypes from 'prop-types'
import { getBand } from '../api'

class BandsList extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      band: {}
    }
  }

  async componentDidMount() {
    this._isMounted = true
    const { current } = this.state
    const { bandsIds } = this.props
    // init with the first band of the id list
    const band = await getBand(bandsIds[current])
    if (this._isMounted) {
      this.setState({ band: band.data })
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { bandsIds } = this.props
    const { current } = this.state
    // if band ids have change, then we need to show a new first band
    if (this.props.bandsIds !== prevProps.bandsIds) {
      const band = await getBand(bandsIds[current])
      this.setState({ current: 0, band: band.data })
    }
    // if current index has change, we request the new band
    if (this.state.current !== prevState.current) {
      const { current } = this.state
      const { bandsIds } = this.props
      const band = await getBand(bandsIds[current])
      this.setState({ band: band.data })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  handleClick = e => {
    e.target.id === 'next'
      ? this.setState(state => ({ current: state.current + 1 }))
      : this.setState(state => ({ current: state.current - 1 }))
  }

  render() {
    const { current, band } = this.state
    const { bandsIds } = this.props
    return (
      <div>
        <Band title={band.title} body={band.body} members={band.members} />
        <Navigation
          current={current}
          size={bandsIds.length}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

BandsList.propTypes = {
  bandsIds: PropTypes.array
}

export default BandsList
