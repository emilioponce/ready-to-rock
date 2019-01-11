import React from 'react'
import ReactDOM from 'react-dom'
import Band from '../Band'
import { shallow } from 'enzyme'

const component = (
  <Band
    title="Band name"
    body="<div>bla bla bla</div>"
    members={
      [
        {name:'member1', instrument: 'instrument1'}, 
        {name:'member2', instrument: 'instrument2'}
      ]}
  />
)
describe('Component Band', () => {
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
