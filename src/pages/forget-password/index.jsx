/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/styles/global";
import { ImageWrap, RegisterWrapper } from "./style";
import IconLogo from "@/assets/logo.svg";
import { Col, Row } from "antd";
import { PhoneInput } from "@/components/phone-input";
import { Button } from "@/components/button";
import { useForget } from "./useRegister";
import { Spinner } from "@/components/spinner";

const ForgetPassword = () => {
  const { form, onSubmit, isLoading, contextHolder } = useForget();

  return (
    <RegisterWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {contextHolder}
        <Container>
          <div className="content">
            <ImageWrap>
              <img className="icon-logo" src={IconLogo} alt="icon" />
            </ImageWrap>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <h1>Parolni unutdingizmi?</h1>
              </Col>
              <Col span={24}>
                <PhoneInput
                  control={form.control}
                  name="phone"
                  label="Raqamingiz*"
                  placeholder="Raqamingiz*"
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

export default ForgetPassword;
