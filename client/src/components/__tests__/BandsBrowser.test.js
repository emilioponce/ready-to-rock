import React from 'react'
import ReactDOM from 'react-dom'
import BandsBrowser from '../BandsBrowser'
import { shallow } from 'enzyme'

const component = <BandsBrowser />

jest.mock('../BandsList')

describe('Component BandsBrowser', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })

  it("when bands list is null 'Loading...' message renders", () => {
    const wrapper = shallow(component)
    const text = wrapper.text()
    expect(text).toBe('Loading ...')
  })

  it("when bands length is 0 'Bands not found' message renders", () => {
    const wrapper = shallow(component)
    wrapper.setState({ bandsIds: [] })
    const text = wrapper.text()
    expect(text).toBe('Bands not found. Return')
  })
})
