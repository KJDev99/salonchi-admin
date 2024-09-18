import { Col, Row } from "antd";
import { Container } from "@/styles/global";
import IconLogo from "@/assets/logo.svg";
import { ImageWrap, RegisterWrapper } from "./style";
import { Button } from "@/components/button";
import { useVerifyCode } from "./useVerify";
import { CustomPinInput } from "@/components/pin-input";
import { Spinner } from "@/components/spinner";

const VerifyCode = () => {
  const { form, onSubmit, isLoading, contextHolder } = useVerifyCode();

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
                <h1>Tasdiqlash</h1>
              </Col>
              <Col span={24}>
                <CustomPinInput control={form.control} name="code" />
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

export default VerifyCode;
