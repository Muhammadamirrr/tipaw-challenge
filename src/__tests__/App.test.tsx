import { mount } from 'enzyme'

import App from '../App'

describe('App component', () => {
  it('should render correctly', async () => {
    const wrapper = mount(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
