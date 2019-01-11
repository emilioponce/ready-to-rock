import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from '../Navigation'
import { shallow } from 'enzyme'

const fn = jest.fn()
const component = <Navigation current={1} size={24} handleClick={fn} />
const wrapper = shallow(component)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Component Navigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('prev button is clicked', () => {
    const event = { target: { id: 'prev' } }
    wrapper
      .find('button')
      .first()
      .simulate('click', event)
    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(event)
  })

  it('next button is clicked', () => {
    const event = { target: { id: 'next' } }
    wrapper
      .find('button')
      .at(1)
      .simulate('click', event)
    expect(fn).toHaveBeenCalled()
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(event)
  })

  it('prev button do not exist when it is the first band', () => {
    const component = <Navigation current={0} size={24} handleClick={fn} />
    const wrapper = shallow(component)
    expect(wrapper.exists('#prev')).toBeFalsy()
  })

  it('next button do not exist when it is the last band', () => {
    const component = <Navigation current={23} size={24} handleClick={fn} />
    const wrapper = shallow(component)
    expect(wrapper.exists('#next')).toBeFalsy()
  })
})
