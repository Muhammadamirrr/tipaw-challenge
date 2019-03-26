import SignUpForm from './form'
import { signUp } from '../../api/auth';

import { MainContainer, MainHeading, SubHeading, Text, Link } from './landing.styles'

const SignUp = (props: any) => {
  const onSubmit = (props: any) => {
    delete props.confirmPassword

    signUp(props)
  }

  return (
    <MainContainer>
      <MainHeading>Register</MainHeading>
      <SubHeading>Join Tipaw today, It is free!</SubHeading>
      <Text>Are you a shelter, a breeder, a vet or a grommer? <Link>click here</Link></Text>
      <hr />

      <SignUpForm onSubmit={onSubmit} />
    </MainContainer>
  )
}

export default SignUp
