import { request } from "@/shared/api/request";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useVerifyCode = () => {
  const form = useForm();
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const user = JSON.parse(localStorage.getItem("userData"));

  const { mutate, isLoading } = useMutation(
    (data) => request.post("user/verify/forgot/password", data),
    {
      onSuccess: (res) => {
        navigate(`/update-password?client=${res?.data?.id}`);
      },
      onError: (err) => {
        api["error"]({
          message: "Error",
          description:
            err?.response?.data?.detail || "Nimadur xatolik yuz berdi!",
        });
      },
    }
  );

  const onSubmit = (data) => {
    const payload = {
      phone: user?.phone,
      code: Number(data.code),
      is_seller:true
    };
    mutate(payload);
  };

  return {
    form,
    onSubmit,
    isLoading,
    contextHolder,
  };
};
