import { FC } from "react";
import { Form, Input, Button, DatePicker, Select, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
const { Option } = Select;
const { Title } = Typography;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);


const CompanyForm:FC<{setShow: Function, setStatus: Function}> = ({setShow, setStatus}) => {
  return ( 
    <div className="company">
      <Title level={4} style={{ margin: 0, padding: "0.5rem 0" }}>
        Create your own account
      </Title>
      <Form>
        <Form.Item
          label="FirstName"
          name="firstName"
          rules={[{ required: true }]}
        >
          <Input
          />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="info">
        <Form.Item label="Company Name" name="companyName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Tax Id" name="taxId" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        </div>
    

        <div className="info">
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={true}>
            Submit
          </Button>
        </Form.Item>
        <ArrowLeftOutlined
          style={{
            position: "absolute",
            right: "15rem",
            bottom: "6rem",
            fontSize: "1rem",
          }}
          onClick={() => {setShow(true) 
            setStatus("")
          }}
        />
      </Form>
    </div>
   );
}
 
export default CompanyForm;