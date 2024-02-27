import { Checkbox as AntdCheckbox, Space } from "antd"
import { CheckboxGroupProps } from "antd/es/checkbox"

interface ICheckboxGroup extends CheckboxGroupProps {
  options: OptionType[]
}

const CheckboxGroup = ({ options, ...rest }: ICheckboxGroup): JSX.Element => {
  return (
    <AntdCheckbox.Group className="w-full" {...rest}>
      <Space direction="vertical">
        {options.map((option) => (
          <AntdCheckbox key={option.value + ""} value={option.value}>
            {option.label}
          </AntdCheckbox>
        ))}
      </Space>
    </AntdCheckbox.Group>
  )
}

export default CheckboxGroup
