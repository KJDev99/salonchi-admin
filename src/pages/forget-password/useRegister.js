import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { request } from "@/shared/api/request";
import { notification } from "antd";

export const useForget = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation(
    (data) => request.post("user/forgot/password", data),
    {
      onSuccess: (res) => {
        localStorage.setItem("userData", JSON.stringify(res?.data));
        navigate("/verify-code");
      },
      onError: (err) => {
        console.log(err?.response?.data, "data");
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
      phone: data.phone?.replaceAll(" ", ""),
    };
    mutate(payload);
  };

  return {
    onSubmit,
    form,
    isLoading,
    contextHolder,
  };
};
