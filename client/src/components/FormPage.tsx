import { FC, useState } from "react";
import { Typography, Avatar } from "antd";
import individual from "../img/individual.png";
import company from "../img/company.png";
import IndividualForm from "./individualForm";
import CompanyForm from "./companyForm";

const { Title, Text } = Typography;

const FormPage: FC = () => {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);

  const handlePerson = (): void => {
    setStatus("individual");
    setShow(false);
  };

  const handleCompany = ():void => {
    setStatus("company");
    setShow(false);
  }

  return (
    <div className="form">
      <header>
        <Title level={4} style={{margin: 0}}>LOGO</Title>
      </header>
      {show && (
        <div className="situation">
          <Title level={3}>Tell us what's your situation</Title>
          <div className="status" aria-hidden="true" onClick={handlePerson}>
            <Avatar
              size={{ xs: 15, sm: 24, md: 32, lg: 40, xl: 55, xxl: 60 }}
              src={individual}
            />
            <Text
              style={{
                fontSize: "1.1rem",
                paddingLeft: "12px",
                fontWeight: "500",
              }}
            >
              You are an independent customer
            </Text>
          </div>

          <div className="status" aria-hidden="true" onClick={handleCompany}>
            <Avatar
              size={{ xs: 15, sm: 24, md: 32, lg: 40, xl: 55, xxl: 60 }}
              src={company}
            />
            <Text
              style={{
                fontSize: "1.1rem",
                paddingLeft: "12px",
                fontWeight: "500",
              }}
            >
              You have a company
            </Text>
          </div>
        </div>
      )}
      {status === "individual" && <IndividualForm setShow={setShow} setStatus={setStatus} type={status} />}
      {status === "company" && <CompanyForm setShow={setShow} setStatus={setStatus}/>}
    </div>
  );
};

export default FormPage;
