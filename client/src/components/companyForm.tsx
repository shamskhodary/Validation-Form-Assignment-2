import { FC, useState } from "react";
import { Form, Input, Button, DatePicker, Select, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import businessSchema from "../validation/businessValidation";
import dayjs from "dayjs";
import axios from "axios";
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

interface ICompanyForm {
  setShow: Function;
  setStatus: Function;
  type: string;
}

const CompanyForm: FC<ICompanyForm> = ({ setShow, setStatus, type }) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phoneNumber: "",
    gender: "",
    birthDate: "",
    taxId: "",
    companyName: "",
    type: type,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: businessSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      values.type = type;

      try {
        if (values.type) {
          const response = await axios.post("/api/v1/register", { ...values });
          if (response.status === 200) {
            setSubmitting(false);
            Swal.fire({
              position: "center",
              icon: "success",
              title: response.data.message,
              showConfirmButton: false,
              timer: 2500,
            });
          }
        }
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.error,
          timer: 2500,
        });
      }
    },
  });

  return (
    <div className="company">
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
          validateStatus={
            formik.touched.firstName && formik.errors.firstName
              ? "error"
              : "success"
          }
          help={formik.touched.firstName && formik.errors.firstName}
        >
          <Input
            onChange={(e) => formik.setFieldValue("firstName", e.target.value)}
            value={formik.values.firstName}
            onBlurCapture={formik.handleBlur}
            onBlur={() => {
              setIsValid(
                Object.values(formik.errors).every((val) => val === undefined)
              );
            }}
            style={{
              borderColor: !formik.touched.firstName
                ? ""
                : formik.touched.firstName && formik.errors.firstName
                ? "red"
                : "green",
            }}
          />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          validateStatus={
            formik.touched.lastName && formik.errors.lastName
              ? "error"
              : "success"
          }
          help={formik.touched.lastName && formik.errors.lastName}
        >
          <Input
            onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
            value={formik.values.lastName}
            onBlurCapture={formik.handleBlur}
            onBlur={() => {
              setIsValid(
                Object.values(formik.errors).every((val) => val === undefined)
              );
            }}
            style={{
              borderColor: !formik.touched.lastName
                ? ""
                : formik.touched.lastName && formik.errors.lastName
                ? "red"
                : "green",
            }}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : "success"
          }
          help={formik.touched.email && formik.errors.email}
        >
          <Input
            onChange={(e) => formik.setFieldValue("email", e.target.value)}
            value={formik.values.email}
            onBlurCapture={formik.handleBlur}
            onBlur={() => {
              setIsValid(
                Object.values(formik.errors).every((val) => val === undefined)
              );
            }}
            style={{
              borderColor: !formik.touched.email
                ? ""
                : formik.touched.email && formik.errors.email
                ? "red"
                : "green",
            }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          validateStatus={
            formik.touched.password && formik.errors.password
              ? "error"
              : "success"
          }
          help={formik.touched.password && formik.errors.password}
        >
          <Input.Password
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
            value={formik.values.password}
            onBlurCapture={formik.handleBlur}
            onBlur={() => {
              setIsValid(
                Object.values(formik.errors).every((val) => val === undefined)
              );
            }}
            style={{
              borderColor: !formik.touched.password
                ? ""
                : formik.touched.password && formik.errors.password
                ? "red"
                : "green",
            }}
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          validateStatus={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "error"
              : "success"
          }
          help={formik.touched.confirmPassword && formik.errors.confirmPassword}
        >
          <Input.Password
            onChange={(e) =>
              formik.setFieldValue("confirmPassword", e.target.value)
            }
            value={formik.values.confirmPassword}
            onBlurCapture={formik.handleBlur}
            onBlur={() => {
              setIsValid(
                Object.values(formik.errors).every((val) => val === undefined)
              );
            }}
            style={{
              borderColor: !formik.touched.confirmPassword
                ? ""
                : formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                ? "red"
                : "green",
            }}
          />
        </Form.Item>
        <div className="info">
          <Form.Item
            label="Company Name"
            name="companyName"
            validateStatus={
              formik.touched.companyName && formik.errors.companyName
                ? "error"
                : "success"
            }
            help={formik.touched.companyName && formik.errors.companyName}
          >
            <Input
              onChange={(e) =>
                formik.setFieldValue("companyName", e.target.value)
              }
              value={formik.values.companyName}
              onBlurCapture={formik.handleBlur}
              onBlur={() => {
                setIsValid(
                  Object.values(formik.errors).every((val) => val === undefined)
                );
              }}
              style={{
                borderColor: !formik.touched.companyName
                  ? ""
                  : formik.touched.companyName && formik.errors.companyName
                  ? "red"
                  : "green",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Tax Id"
            name="taxId"
            validateStatus={
              formik.touched.taxId && formik.errors.taxId ? "error" : "success"
            }
            help={formik.touched.taxId && formik.errors.taxId}
          >
            <Input
              onChange={(e) => formik.setFieldValue("taxId", e.target.value)}
              value={formik.values.taxId}
              onBlurCapture={formik.handleBlur}
              onBlur={() => {
                setIsValid(
                  Object.values(formik.errors).every((val) => val === undefined)
                );
              }}
              style={{
                borderColor: !formik.touched.taxId
                  ? ""
                  : formik.errors.taxId
                  ? "red"
                  : "green",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            validateStatus={
              formik.touched.address && formik.errors.address
                ? "error"
                : "success"
            }
            help={formik.touched.address && formik.errors.address}
          >
            <Input
              onChange={(e) => formik.setFieldValue("address", e.target.value)}
              value={formik.values.address}
              onBlurCapture={formik.handleBlur}
              onBlur={() => {
                setIsValid(
                  Object.values(formik.errors).every((val) => val === undefined)
                );
              }}
              style={{
                borderColor: !formik.touched.address
                  ? ""
                  : formik.touched.address && formik.errors.address
                  ? "red"
                  : "green",
              }}
            />
          </Form.Item>
        </div>

        <div className="info">
          <div className="message">
            <Form.Item
             style={{marginBottom:'0', padding: '0'}}
              name="gender"
              label="Gender"
              validateStatus={
                formik.touched.gender && formik.errors.gender
                  ? "error"
                  : "success"
              }
            >
              <Select
                placeholder="select your gender"
                onChange={(gender: string) =>
                  formik.setFieldValue("gender", gender)
                }
                value={formik.values.gender}
                style={{
                  borderColor: !formik.touched.gender
                    ? ""
                    : formik.touched.gender && formik.errors.gender
                    ? "red"
                    : "green",
                }}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            {formik.errors.gender && (
              <div style={{ color: "red" }}>{formik.errors.gender}</div>
            )}
          </div>
          <div className="message">
            <Form.Item
            style={{marginBottom:'0', padding: '0'}}
              label="BirthDate"
              name="birthDate"
              validateStatus={
                formik.touched.birthDate && formik.errors.birthDate
                  ? "error"
                  : "success"
              }
            >
              <DatePicker
                value={dayjs(formik.values.birthDate)}
                onChange={(date, dateString) =>
                  formik.setFieldValue("birthDate", dateString)
                }
                style={{
                  borderColor: !formik.touched.birthDate
                    ? ""
                    : formik.errors.birthDate
                    ? "red"
                    : "green",
                }}
              />
            </Form.Item>
            { formik.errors.birthDate && (
              <div style={{ color: "red" }}>{formik.errors.birthDate}</div>
            )}
          </div>

          <div className="message">
            <Form.Item
             style={{marginBottom:'0', padding: '0'}}
              name="phoneNumber"
              label="Phone Number"
              validateStatus={
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "error"
                  : "success"
              }
            >
              <Input
                addonBefore={prefixSelector}
                onChange={(e) =>
                  formik.setFieldValue("phoneNumber", e.target.value)
                }
                value={formik.values.phoneNumber}
                onBlurCapture={formik.handleBlur}
                onBlur={() => {
                  setIsValid(
                    Object.values(formik.errors).every(
                      (val) => val === undefined
                    )
                  );
                }}
                style={{
                  borderColor: !formik.touched.phoneNumber
                    ? ""
                    : formik.touched.phoneNumber && formik.errors.phoneNumber
                    ? "red"
                    : "green",
                }}
              />
            </Form.Item>
            {formik.errors.phoneNumber && (
              <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
            )}
          </div>
        </div>
        <Form.Item>
          <Button
            style={{marginTop: '1rem'}}
            type="primary"
            htmlType="submit"
            disabled={!isValid || formik.isSubmitting}
          >
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
          onClick={() => {
            setShow(true);
            setStatus("");
          }}
        />
      </Form>
    </div>
  );
};

export default CompanyForm;
