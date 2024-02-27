import { Button as AntdButton, ButtonProps } from "antd"

interface IButton extends ButtonProps {}

const Button = ({ children, ...rest }: IButton): JSX.Element => {
  return (
    <AntdButton type="primary" shape="round" {...rest}>
      {children}
    </AntdButton>
  )
}

export default Button
