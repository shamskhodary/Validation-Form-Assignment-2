import { FC, useState } from "react";
import { Form, Input, Button, DatePicker, Select, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import validationSchema from "../validation/userValidation";
import { useFormik } from "formik";
import axios from "axios";
import dayjs from "dayjs";
import Swal from "sweetalert2";
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

const IndividualForm: FC<{ setShow: Function; setStatus: Function, type:string }> = ({
  setShow,
  setStatus,
  type
}) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: 0,
    gender: "",
    birthDate: "",
    type: type,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async(values, { setSubmitting }) => {
      values.type = type;
      try {
        if(values.type){
          const response = await axios.post("/api/v1/register", { ...values });
          if(response.data){
            setSubmitting(false)
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 2500
            })
          }
        }
        
      } catch (error:any) {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: error.response.data,
          showConfirmButton: false,
          timer: 2500
        })
      }
    },
  });

  return (
    <div className="individual">
      <Title level={4} style={{ margin: 0, padding: "0.5rem 0" }}>
        Create your own account
      </Title>
      <Form
        initialValues={{ remember: true }}
        onSubmitCapture={formik.handleSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="FirstName"
          name="firstName"  
          validateStatus={formik.touched.firstName && formik.errors.firstName ? 'error' : 'success'}
          help={formik.touched.firstName && formik.errors.firstName}
        >
          <Input
            onChange={(e) => formik.setFieldValue('firstName', e.target.value)}
            value={formik.values.firstName}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor: formik.errors.firstName ? "red": "green"}}
          />
        </Form.Item>
        <Form.Item label="LastName" name="lastName"
           validateStatus={formik.touched.lastName && formik.errors.lastName ? 'error' : 'success'}
           help={formik.touched.lastName && formik.errors.lastName}>
          <Input
            onChange={(e) =>formik.setFieldValue('lastName', e.target.value)}
            value={formik.values.lastName}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor: formik.errors.lastName ? "red": "green"}}

          />
        </Form.Item>
        <Form.Item name="email" label="E-mail"
           validateStatus={formik.touched.email && formik.errors.email ? 'error' : 'success'}
           help={formik.touched.email && formik.errors.email}>
          <Input
            onChange={(e) =>   formik.setFieldValue('email', e.target.value)}
            value={formik.values.email}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor:  formik.errors.email ? "red": "green"}}
          />
        </Form.Item>
        <Form.Item name="password" label="Password"
           validateStatus={formik.touched.password && formik.errors.password ? 'error' : 'success'}
           help={formik.touched.password && formik.errors.password}
         hasFeedback>
          <Input.Password
            onChange={(e) => formik.setFieldValue('password', e.target.value)}
            value={formik.values.password}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor: formik.errors.password ? "red": "green"}}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          validateStatus={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'error' : 'success'}
          help={formik.touched.confirmPassword && formik.errors.confirmPassword}
          hasFeedback
        >
          <Input.Password
            onChange={(e) => formik.setFieldValue('confirmPassword', e.target.value)}
            value={formik.values.confirmPassword}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor: formik.errors.confirmPassword ? "red": "green"}}
          />
        </Form.Item>
        <Form.Item label="Address" name="address"
           validateStatus={formik.touched.address && formik.errors.address ? 'error' : 'success'}
           help={formik.touched.address && formik.errors.address}>
          <Input
            onChange={(e) => formik.setFieldValue('address', e.target.value)}
            value={formik.values.address}
            onBlurCapture={formik.handleBlur}
            onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
            style={{borderColor: formik.errors.address ? "red": "green"}}
          />
        </Form.Item>

        <div className="info">
          <Form.Item name="gender" label="Gender"    
          validateStatus={formik.touched.gender && formik.errors.gender ? 'error' : 'success'}
          help={formik.touched.gender && formik.errors.gender}>
            <Select
              placeholder="select your gender"
              onChange={(gender: string) =>
                formik.setFieldValue("gender", gender)
              }
              value={formik.values.gender}
              style={{borderColor: formik.errors.gender ? "red": "green"}}
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="BirthDate" name="birthDate"
             validateStatus={formik.touched.birthDate && formik.errors.birthDate ? 'error' : 'success'}
             help={formik.touched.birthDate && formik.errors.birthDate}>
            <DatePicker
            value={dayjs(formik.values.birthDate)} 
            onChange={(date, dateString) => formik.setFieldValue('birthDate', dateString)}
            style={{borderColor: formik.errors.birthDate? "red": "green"}}
            />
          </Form.Item>

          <Form.Item name="phoneNumber" label="Phone Number"
             validateStatus={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'error' : 'success'}
             help={formik.touched.phoneNumber && formik.errors.phoneNumber}>
            <Input
              addonBefore={prefixSelector}
              onChange={(e) => formik.setFieldValue('phoneNumber', e.target.value)}
              value={formik.values.phoneNumber}
              onBlurCapture={formik.handleBlur}
              onBlur={()=>{setIsValid(Object.values(formik.errors).every(val => val === undefined))}}
              style={{borderColor: formik.errors.phoneNumber ? "red": "green"}}
            />
          </Form.Item>
        </div>
          <Button type="primary" htmlType="submit" disabled={!isValid || formik.isSubmitting} >
            Submit
          </Button>
        <ArrowLeftOutlined
          style={{
            position: "absolute",
            right: "15rem",
            bottom: "6rem",
            fontSize: "1rem",
          }}
          onClick={() => {
            setShow(true);
            setStatus("");
          }}
        />
      </Form>
    </div>
  );
};

export default IndividualForm;
