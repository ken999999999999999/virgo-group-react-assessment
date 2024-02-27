import { Checkbox as AntdCheckbox, Space } from "antd"

interface ICheckboxGroup {
  options: OptionType[]
}

const CheckboxGroup = ({ options }: ICheckboxGroup): JSX.Element => {
  return (
    <AntdCheckbox.Group className="w-full">
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
