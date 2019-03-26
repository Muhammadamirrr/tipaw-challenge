import styled from '@emotion/styled'

export const HeaderDiv = styled.div`
  align-items: center;
  background-color: #fff;
  border-bottom: '1px solid #c5ccd6';
  display: flex;
  height: 80px;
  justify-content: space-around;
  line-height: 1.2;
  position: 'fixed';
  top: 0;
  width: 100%;
  z-index: 100;
`

export const HeaderButtons = styled.div`
  align-items: center;
  color: #707070;
  display: flex;
  font-size: 16px;

  > p {
    cursor: pointer;
    padding: 0px 20px;
  }

  > p:hover {
    color: #5acee8;
  }
`
export const Dropdown = styled.div`
  display: inline-block;
  position: relative;

  :hover .dropdown-content {
    display: block;
  }

  .dropdown-content {
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display: none;
    min-width: 160px;
    position: absolute;
    right: -50px;
    z-index: 100;

    a:hover {background-color: #f1f1f1}

    a {
      color: #707070;
      display: block;
      padding: 12px 16px;
      text-decoration: none;
    }
  }
`
