import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { shallow } from 'enzyme'

const component = <App />

describe('Component App', () => {
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
