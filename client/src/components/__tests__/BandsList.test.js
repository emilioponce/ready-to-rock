import React from 'react'
import ReactDOM from 'react-dom'
import BandsList from '../BandsList'
import { shallow } from 'enzyme'

const component = <BandsList bandsIds={[1, 2, 4, 5]} />

describe('Component BandsList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })

  it("Next value when 'next' button is clicked", () => {
    const wrapper = shallow(component)
    let Navigation = wrapper.find('Navigation')
    const handleClick = Navigation.props().handleClick
    const event = { target: { id: 'next' } }
    handleClick(event)
    Navigation = wrapper.find('Navigation')
    expect(Navigation.props().current).toBe(1)
  })

  it("Previous value when 'prev' button is clicked", () => {
    const wrapper = shallow(component)
    let Navigation = wrapper.find('Navigation')
    const handleClick = Navigation.props().handleClick
    const event = { target: { id: 'prev' } }
    handleClick(event)
    Navigation = wrapper.find('Navigation')
    // this value is no possible in the app, but this shows that decrements by 1
    expect(Navigation.props().current).toBe(-1)
  })
})
