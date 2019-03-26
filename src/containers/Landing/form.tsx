import { ErrorMessage, Field, Form, Formik } from 'formik'

import { Button } from '../../components'
import { validate } from './validate'
import './styles.scss'

import { InputContainer, FieldHeading, TermAndConditionContainer } from './landing.styles'

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptedTermsAndConditions: false
}

export default ({ onSubmit }: any) => (
  <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
    {({ errors, touched, isSubmitting }) => (
      <Form>
        <InputContainer>
          <FieldHeading>First name</FieldHeading><div>*</div>
          <Field
            name={'firstName'}
            type={'text'}
            placeholder={''}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'firstName'} component={'div'} className={'form-error'} />
        </InputContainer>

        <InputContainer>
          <FieldHeading>Last name</FieldHeading><div>*</div>
          <Field
            name={'lastName'}
            type={'text'}
            placeholder={''}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'lastName'} component={'div'} className={'form-error'} />
        </InputContainer>

        <InputContainer>
          <FieldHeading>Phone number</FieldHeading><div>*</div>
          <Field
            name={'phoneNumber'}
            type={'text'}
            placeholder={''}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'phoneNumber'} component={'div'} className={'form-error'} />
        </InputContainer>

        <InputContainer>
          <FieldHeading>Email address</FieldHeading><div>*</div>
          <Field
            name={'email'}
            type={'text'}
            placeholder={''}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'email'} component={'div'} className={'form-error'} />
        </InputContainer>

        <InputContainer>
          <FieldHeading>Password</FieldHeading><div>*</div>
          <Field
            type={'password'}
            placeholder={''}
            name={'password'}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'password'} component={'div'} className={'form-error'} />
        </InputContainer>

        <InputContainer>
          <FieldHeading>Confirm password</FieldHeading><div>*</div>
          <Field
            type={'password'}
            placeholder={''}
            name={'confirmPassword'}
            autoComplete={'off'}
            className={'input-class'}
          />
          <ErrorMessage name={'confirmPassword'} component={'div'} className={'form-error'} />
        </InputContainer>

        <TermAndConditionContainer>
          <div>
            <Field type={'checkbox'} name={'acceptedTermsAndConditions'} id={'terms-conditions-checkbox'} className={'checkbox'} />
            <label htmlFor="terms-conditions-checkbox" className="css-1qyf47o" style={{ alignSelf: 'center' }}>
              <span className="css-1d4rf8t">
                <p style={{ marginTop: 0, marginLeft: 15, color: '#8c96a3' }}>I have read&nbsp;<a style={{ color: '#8c96a3'}} target="_blank" href="/nl/gebruiksvoorwaarden">Tipaw's terms and conditions</a>&nbsp;of use end</p>
              </span>
            </label>
          </div>
          <ErrorMessage name={'acceptedTermsAndConditions'} component={'div'} className={'form-error'} />
        </TermAndConditionContainer>


        <InputContainer>
          <Button
            className={`submit-button m-0 ${isSubmitting ? 'disabled-login-button' : ''}`}
            text={'Register'}
            classType={'primary'}
            style={{
              alignItems: 'center',
              backgroundColor: '#ffcc01',
              border: 'none',
              borderRadius: 100,
              display: 'flex',
              filter: 'none',
              height: 40,
              justifyContent: 'center',
              marginRight: 0,
              padding: '0px 24px',
              width: '100%'
            }}
            type=''
            children=''
          />
        </InputContainer>
      </Form>
    )}
  </Formik>
)
