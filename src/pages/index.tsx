import { data } from "@/common/data"
import { Button, CheckboxGroup, RadioGroup } from "@/components"
import { Form, Switch } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from "react"

const boolOptions: OptionType[] = [
  { label: "No", value: false },
  { label: "Yes", value: true },
]

const toolOptions: OptionType[] = [
  { label: "Redux", value: 0 },
  { label: "Lodash", value: 1 },
  { label: "Ant design", value: 2 },
  { label: "Webpack", value: 3 },
  { label: "Other", value: 4 },
]

export default function Home() {
  const [isEditable, setIsEditable] = useState(true)
  return (
    <>
      <div className="flex j">
        <Switch
          value={isEditable}
          onChange={() => setIsEditable((value) => !value)}
        />
      </div>
      <Form initialValues={data} disabled={!isEditable} layout="vertical">
        <FormItem
          name="isProficient"
          label="Are you proficient in ReactJS development?"
        >
          <RadioGroup options={boolOptions} />
        </FormItem>
        <FormItem
          name="toolsUsed"
          label="Which tools do you use?"
          extra="Please select all the apply."
        >
          <CheckboxGroup options={toolOptions} />
        </FormItem>
        <Button htmlType="submit" size="large">
          Process
        </Button>
      </Form>
    </>
  )
}
