import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Button } from '..'
import { Dropdown, HeaderDiv, HeaderButtons } from './header.styles'

const logo = require("../../assets/logo.svg") as string;

const Header = () => {
  return (
    <HeaderDiv>
    <img src={logo} alt="Logo" />

    {window.outerWidth > 900 && (
      <HeaderButtons>
        <p>Accueil</p>
        <p>Elevages</p>
        <p>Professionnels</p>
        <p>Articles</p>

        <Button
          className={'login-button'}
          text={'Inloggen'}
          classType={'secondary'}
          style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            border: '2px solid #5acee8',
            borderRadius: 100,
            color: '#707070',
            display: 'flex',
            filter: 'none',
            fontSize: '15px',
            height: 40,
            justifyContent: 'center',
            marginLeft: 20,
            padding: '0px 24px',
            width: '100%'
          }}
          type=''
          children=''
        />

        <Button
          className={'register-button'}
          text={'Registreren'}
          classType={'primary'}
          style={{
            alignItems: 'center',
            backgroundColor: '#5acee8',
            border: '2px solid #5acee8',
            borderRadius: 100,
            color: '#fff',
            display: 'flex',
            filter: 'none',
            fontSize: '15px',
            height: 40,
            justifyContent: 'center',
            marginLeft: 20,
            padding: '0px 24px',
            width: '100%'
          }}
          type=''
          children=''
        />
      </HeaderButtons>
    )}

    {window.outerWidth < 900 && (
      <Dropdown>
        <FontAwesomeIcon icon={faBars} />
        <div className="dropdown-content">
          <a href="#">Accueil</a>
          <a href="#">Elevages</a>
          <a href="#">Professionnels</a>
          <a href="#">Articles</a>
          <a href="#">Inloggen</a>
          <a href="#">Registreren</a>
        </div>
      </Dropdown>
    )}
    </HeaderDiv>
  )
}

export default Header
