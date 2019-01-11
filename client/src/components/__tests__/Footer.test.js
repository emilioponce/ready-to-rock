import React from 'react'
import ReactDOM from 'react-dom'
import Footer from '../Footer'
import { shallow } from 'enzyme'

const component = <Footer />

describe('Component Footer', () => {
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
