import { Button as AntdButton, ButtonProps } from "antd"

interface IButton extends ButtonProps {}

export const Button = ({ ...rest }: IButton): JSX.Element => {
  return <AntdButton shape="round" type="primary" {...rest} />
}

export default Button
