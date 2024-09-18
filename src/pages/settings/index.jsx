import { Input } from "@/components/input";
import { InputPassword } from "@/components/input-password";
import { PhoneInput } from "@/components/phone-input";
import { ProfileUpload } from "@/components/profile-upload";
import { react_query_keys } from "@/constants/react-query-keys";
import { profileUpdate, userProfile } from "@/shared/modules/profile";
import { Wrapper } from "@/styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Col, Row, notification } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";
import { formSchema } from "./form.schema";
import { Spinner } from "@/components/spinner";
import { BtnWrap } from "./style";

const Settings = () => {
  const [api, contextHolder] = notification.useNotification();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      firstname: null,
      password: null,
      confirm_password: null,
    },
  });
  const [photo, setPhoto] = useState(null);
  const [image, setImage] = useState(null);

  const { refetch, isFetching } = useQuery({
    queryKey: [react_query_keys.profile_detail],
    queryFn: userProfile,
    select: (res) => {
      return res?.data;
    },
    onSuccess: (res) => {
      form.reset({
        ...res,
      });
      if (res?.photo !== null) setImage(res?.photo);
    },
  });

  const { mutate } = useMutation((data) => profileUpdate(data), {
    onSuccess: () => {
      refetch();
      api["success"]({
        message: "Success",
        description: "Foydalanuvchi ma'lumotlari muvaffaqiyatli yangilandi!",
      });
      window.location.reload();
    },
    onError: () => {
      api["error"]({
        message: "Error",
        description: "Tizimda xatolik mavjud",
      });
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    if (photo !== null) formData.append("photo", photo);
    if (data.password !== null && data.confirm_password !== null) {
      formData.append("password", data.password);
      formData.append("confirm_password", data.confirm_password);
    }
    mutate(formData);
  };

  return (
    <Wrapper style={{ paddingTop: 40 }}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <Row gutter={[32, 32]}>
          <Col span={24} lg={6}>
            <ProfileUpload
              setPhoto={setPhoto}
              image={image}
              setImage={setImage}
            />
          </Col>
          <Col span={24} lg={18}>
            <Row gutter={[27, 27]}>
              <Col span={24} lg={12}>
                <Input
                  name="firstname"
                  control={form.control}
                  placeholder="Ism va familiyani kiriting"
                  label="Ism va familiya:"
                />
              </Col>
              <Col span={24} lg={12}>
                <PhoneInput
                  name="phone"
                  control={form.control}
                  placeholder="Telefon raqamni kiriting"
                  label="Telefon raqam:"
                  disabled
                />
              </Col>
              <Col span={24} lg={12}>
                <InputPassword
                  name="password"
                  control={form.control}
                  placeholder="Parolni o'zgartiring"
                  label="Parolni o‘zgartirish:"
                />
              </Col>
              <Col span={24} lg={12}>
                <InputPassword
                  name="confirm_password"
                  control={form.control}
                  placeholder="Parolni qayta kiriting"
                  label="Parolni qayta kiritish:"
                />
              </Col>
              <Col span={24} lg={24}>
                <BtnWrap>
                  <Button className="cancel-btn">Bekor qilish</Button>
                  <button className="save-btn">Saqlash</button>
                </BtnWrap>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      {contextHolder}
      {isFetching && <Spinner />}
    </Wrapper>
  );
};

export default Settings;
