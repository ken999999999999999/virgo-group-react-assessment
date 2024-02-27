import { data } from "@/common/data"
import { Button, RadioGroup } from "@/components"
import CheckboxGroup from "@/components/CheckboxGroup"
import { Card, Form, Switch, Typography } from "antd"
import { useState } from "react"

const boolOptions: OptionType[] = [
  { label: "No", value: false },
  { label: "Yes", value: true },
]

const toolOptions: OptionType[] = [
  { label: "Redux", value: "0" },
  { label: "Lodash", value: "1" },
  { label: "Ant design", value: "2" },
  { label: "Webpack", value: "3" },
  { label: "Other", value: "4" },
]

const initialValues = { ...data, toolsUsed: data.toolsUsed.split(",") }

export default function Home() {
  const [isEditable, setIsEditable] = useState(true)

  const onFinish = (value: any) => {
    console.log(
      JSON.stringify({ ...value, toolsUsed: value.toolsUsed.sort().join(",") })
    )
  }

  return (
    <Card className="w-96">
      <div className="flex justify-between mb-5">
        <Typography>Editable</Typography>
        <Switch
          value={isEditable}
          onChange={() => setIsEditable((value) => !value)}
        />
      </div>
      <Form
        initialValues={initialValues}
        disabled={!isEditable}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="isProficient"
          label="Are you proficient in ReactJS development?"
        >
          <RadioGroup options={boolOptions} />
        </Form.Item>
        <Form.Item label="Which tools do you use?">
          <Form.Item
            name="toolsUsed"
            label="Please select all that apply."
            className="sub-label"
          >
            <CheckboxGroup options={toolOptions} />
          </Form.Item>
        </Form.Item>

        <div className="text-center">
          <Button htmlType="submit" size="large" className="w-52">
            Process
          </Button>
        </div>
      </Form>
    </Card>
  )
}
