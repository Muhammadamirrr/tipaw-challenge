import styled from '@emotion/styled'

export const MainContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 15%);
  margin: auto;
  max-width: 100%;
  padding: 30px;
  position: relative;
  z-index: 1;
`

export const MainHeading = styled.div`
  color: #5acee8;
  font-family: zenon, serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
`

export const SubHeading = styled.div`
  color: #707070;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 10px;
`

export const Text = styled.div`
  color: #707070;
  margin-bottom: 30px;
`

export const Link = styled.div`
  color: #5acee8;
  font-weight: 700;
`

export const InputContainer = styled.div`
  height: 75px;
  margin: 25px 0 15px;
  > div:nth-child(2) {
    display: inline-block;
    color: red;
    margin-left: 6px;
  }
`

export const FieldHeading = styled.div`
  color: #8c96a3;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: left;
`

export const TermAndConditionContainer = styled.div`
  height: 60px;
  margin-top: 15px;
  > div {
    display: flex;
    height: 40px;
  }
`

export const SubmitButton = styled.div`
  align-items: center;
  background-color: #ffcc01;
  border: none;
  border-radius: 100px;
  display: flex;
  filter: none;
  height: 40px;
  justify-content: center;
  margin-right: 0;
  padding: 0px 24px;
  width: 100%;
`
