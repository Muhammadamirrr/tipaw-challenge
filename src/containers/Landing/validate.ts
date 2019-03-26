export const validate = (values: any) => {
  const errors:any = {}

  if (!values.firstName) errors.firstName = 'This field is required'

  if (!values.lastName) errors.lastName = 'This field is required'

  if (!values.email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Incorrect Email Address'
  }

  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/i.test(values.password)) {
    errors.password = 'Password in not strong'
  } else if (!values.password) {
    errors.password = 'This field is required'
  }

  if (!values.phoneNumber) errors.phoneNumber = 'This field is required'


  if (!values.confirmPassword) errors.confirmPassword = 'This field is required'

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'The password is different from the confirmation password'
  }

  if (values.acceptedTermsAndConditions === false) {
    errors.acceptedTermsAndConditions = 'This field is required'
  }

  return errors
}
