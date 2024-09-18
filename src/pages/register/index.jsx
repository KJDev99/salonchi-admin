/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/styles/global";
import { ImageWrap, RegisterWrapper } from "./style";
import IconLogo from "@/assets/logo.svg";
import { Col, Row } from "antd";
import { PhoneInput } from "@/components/phone-input";
import { InputPassword } from "@/components/input-password";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { useRegister } from "./useRegister";
import { Spinner } from "@/components/spinner";

const Register = () => {
  const { form, regions, onSubmit, isLoading } = useRegister();

  return (
    <RegisterWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* {contextHolder} */}
        <Container>
          <div className="content">
            <ImageWrap>
              <img className="icon-logo" src={IconLogo} alt="icon" />
            </ImageWrap>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <h1>Ro'yxatdan o'tish</h1>
              </Col>
              <Col span={24}>
                <Input
                  control={form.control}
                  name="firstname"
                  label="Ismi sharifingiz*"
                  placeholder="Ismi sharifingiz*"
                />
              </Col>
              <Col span={24}>
                <PhoneInput
                  control={form.control}
                  name="phone"
                  label="Raqamingiz*"
                  placeholder="Raqamingiz*"
                />
              </Col>
              <Col span={24}>
                <Select
                  control={form.control}
                  name="region"
                  label="Viloyatingiz*"
                  placeholder="Viloyatingiz*"
                  options={regions}
                />
              </Col>
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="password"
                  label="Parol"
                  placeholder="Parol"
                />
              </Col>
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="confirm_password"
                  label="Parolni qaytadan kiriting"
                  placeholder="Parolni qaytadan kiriting"
                />
              </Col>
              <Col span={24} style={{ marginTop: "10px" }}>
                <Button type="submit" name="Davom etish" />
              </Col>
            </Row>
          </div>
        </Container>
      </form>
      {isLoading && <Spinner />}
    </RegisterWrapper>
  );
};

export default Register;
