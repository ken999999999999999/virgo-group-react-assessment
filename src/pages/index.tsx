import { data } from "@/common/data"
import { Button, RadioGroup } from "@/components"
import { Card, Checkbox, Col, Form, Row, Switch, Typography } from "antd"
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
        <Form.Item name="toolsUsed" label="Which tools do you use?">
          <Checkbox.Group>
            <Row gutter={[8, 12]}>
              {toolOptions.map((option) => (
                <Col key={option.value + ""} span={24}>
                  <Checkbox value={option.value}>{option.label}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <div className="text-center">
          <Button htmlType="submit" size="large" className="w-52 px-2">
            Process
          </Button>
        </div>
      </Form>
    </Card>
  )
}
