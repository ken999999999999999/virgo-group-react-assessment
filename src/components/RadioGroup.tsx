import { Radio as AntdRadio, RadioGroupProps, Space } from "antd"

interface IRadioGroup extends RadioGroupProps {
  options: OptionType[]
}

const RadioGroup = ({ options, ...rest }: IRadioGroup): JSX.Element => {
  return (
    <AntdRadio.Group className="w-full" {...rest}>
      <Space direction="vertical">
        {options.map((option) => (
          <AntdRadio key={option.value + ""} value={option.value}>
            {option.label}
          </AntdRadio>
        ))}
      </Space>
    </AntdRadio.Group>
  )
}

export default RadioGroup
