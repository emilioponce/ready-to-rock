import React from 'react'
import ReactDOM from 'react-dom'
import SearchBox from '../SearchBox'
import { shallow } from 'enzyme'

const fn = jest.fn()
const component = <SearchBox onSearchTermChange={fn} />

describe('Component SearchBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('snapshot renders correctly', () => {
    const wrapper = shallow(component)
    expect(wrapper).toMatchSnapshot()
  })

  it('user can introduce text', () => {
    const wrapper = shallow(component)
    const changeEvent = {
      target: { value: 'rock' }
    }
    wrapper.find('input').simulate('change', changeEvent)
    expect(wrapper.find('input').props().value).toEqual('rock')
  })

  it('user introduces text and after a search button click the state changes', () => {
    const wrapper = shallow(component)
    expect(wrapper.state().searchTerms).toBe('')
    const changeEvent = {
      target: { value: 'rock' }
    }
    wrapper.find('input').simulate('change', changeEvent)
    wrapper.find('button').simulate('click')
    expect(wrapper.state().searchTerms).toBe('rock')
  })
})
