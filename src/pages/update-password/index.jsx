import { Col, Row } from "antd";
import { Container } from "@/styles/global";
import IconLogo from "@/assets/logo.svg";
import { ImageWrap, RegisterWrapper } from "./style";
import { Button } from "@/components/button";
import { useLogin } from "./useLogin";
import { InputPassword } from "@/components/input-password";
import { Spinner } from "@/components/spinner";

const UpdatePassword = () => {
  const { form, onSubmit, isLoading, contextHolder } = useLogin();

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
                <h1>Parolni yangilash</h1>
              </Col>
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="password"
                  label="Yangi parolni kiriting*"
                  placeholder="Yangi parolni kiriting*"
                />
              </Col>
              <Col span={24}>
                <InputPassword
                  control={form.control}
                  name="confirm_password"
                  label="Parolni qaytadan kiriting*"
                  placeholder="Parolni qaytadan kiriting*"
                />
              </Col>
              <Col span={24} style={{ marginTop: "10px" }}>
                <Button type="submit" name="Parolni yangilash" />
              </Col>
            </Row>
          </div>
        </Container>
      </form>
      {isLoading && <Spinner />}
    </RegisterWrapper>
  );
};

export default UpdatePassword;
