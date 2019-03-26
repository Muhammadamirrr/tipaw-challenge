import { StyledButton } from './button.styles'

interface props {
  text: any,
  style: any,
  className: any,
  classType: any,
  disabled?: any,
  onClick?: any,
  type?: any,
  children? :any
}

export default ({ text, style, className, classType, disabled=false, onClick }: props) => (
  <StyledButton
    className={`btn-${classType} ${className}`}
    style={style}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </StyledButton>
)
