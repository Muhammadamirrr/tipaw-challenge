import { mount, shallow } from 'enzyme'

import { signUp } from '../../api/auth'
import SignUpForm from '../../containers/Landing'
import { waitForComponentToPaint } from '../../utils/index'

describe('Form component', () => {
  it('should render correctly', async () => {
    const wrapper = mount(
      <SignUpForm />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('input').length).toBe(7)
    expect(wrapper.find('button').length).toBe(1)
  })
})

describe('Check Validations', () => {
  it('should show proper validation', async () => {
    let wrapper = mount(
      <SignUpForm />
    )

    const submitButton = wrapper.find('button.submit-button')
    submitButton.simulate('click')
    console.log(wrapper.find(".form-error").at(1).debug())
    expect((wrapper.find(".form-error")).length/2).toBe(7)
  })
})

describe('Should update the fields', () => {
  describe('When it is rendered', () => {
    let wrapper = mount(
      <SignUpForm />
    )

    it('Then the form fields should have the correct value', async () => {
      const firstNameInput = wrapper.find('input[name="firstName"]')
      firstNameInput.instance().value = 'David'
      firstNameInput.simulate('change')

      const lastNameInput = wrapper.find('input[name="lastName"]')
      lastNameInput.instance().value = 'Jones'
      lastNameInput.simulate('change')

      const emailInput = wrapper.find('input[name="email"]')
      emailInput.instance().value = 'david.jones@gmail.com'
      emailInput.simulate('change')

      const phoneNumberInput = wrapper.find('input[name="phoneNumber"]')
      phoneNumberInput.instance().value = '0013527085269'
      phoneNumberInput.simulate('change')

      const passwordInput = wrapper.find('input[name="password"]')
      passwordInput.instance().value = 'f17@LKJH'
      passwordInput.simulate('change')

      const confirmPasswordInput = wrapper.find('input[name="confirmPassword"]')
      confirmPasswordInput.instance().value = 'f17@LKJH'
      confirmPasswordInput.simulate('change')

      await waitForComponentToPaint(wrapper)

      expect(wrapper.find('input[name="firstName"]').prop('value')).toBe('David')
      expect(wrapper.find('input[name="lastName"]').prop('value')).toBe('Jones')
      expect(wrapper.find('input[name="email"]').prop('value')).toBe('david.jones@gmail.com')
      expect(wrapper.find('input[name="phoneNumber"]').prop('value')).toBe('0013527085269')
      expect(wrapper.find('input[name="password"]').prop('value')).toBe('f17@LKJH')
      expect(wrapper.find('input[name="confirmPassword"]').prop('value')).toBe('f17@LKJH')
    })
  })
})
