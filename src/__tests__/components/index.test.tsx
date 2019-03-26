import { mount } from 'enzyme'

import { Footer, Header, Tagline } from '../../components'

describe('Footer component', () => {
  it('should render correctly', async () => {
    const wrapper = mount(
      <Footer />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h4').length).toBe(3)
    expect(wrapper.find('p').length).toBe(16)
  })
})

describe('Tagline component', () => {
  it('should render correctly', async () => {
    const wrapper = mount(
      <Tagline />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('svg').length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })
})

describe('Header component', () => {
  it('should render correctly', async () => {
    const wrapper = mount(
      <Header />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('button').length).toBe(2)
  })
})
