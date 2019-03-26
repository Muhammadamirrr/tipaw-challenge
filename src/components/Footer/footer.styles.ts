import styled from '@emotion/styled'

export const FooterContainer = styled.div`
  background-color: #fff;
  display: flex;
  height: auto;
  justify-content: space-around;
  padding: 40px 0;
  width: 100%;

  @media (max-width: 615px) {
    flex-direction: column;
    text-align: center;
  }
`

export const FooterColumn = styled.div`
  > h4 {
    color: #5acee8;
  }
  > p {
    color: #707070;
    cursor: pointer;
  }
  > p:hover {
    color: #5acee8;
  }
`
