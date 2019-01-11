import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../Header'
import { shallow } from 'enzyme'

const component = <Header />

describe('Component Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })
})
