import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { request } from "@/shared/api/request";

export const useLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let object = new URLSearchParams(location.search);
  const params = Object.fromEntries(object.entries());
  const [api, contextHolder] = notification.useNotification();

  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation(
    (data) =>
      request.post(`user/recover/forgot/password/${params?.client}`, data),
    {
      onSuccess: () => {
        navigate("/");
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
    mutate(data);
  };

  return {
    form,
    onSubmit,
    isLoading,
    contextHolder,
  };
};
