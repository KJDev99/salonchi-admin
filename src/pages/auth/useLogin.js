import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "./form.schema";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/shared/modules/login";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

export const useLogin = () => {
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();

  const form = useForm({
    resolver: yupResolver(formSchema),
  });

  const { mutate, isLoading } = useMutation((data) => login(data), {
    onSuccess: (res) => {
      localStorage.setItem("userInfo", JSON.stringify(res?.data));
      navigate("/admin/statistics");
      api["success"]({
        message: "Success",
        description: "Tizimga muvaffaqiyatli kirdingiz",
      });
    },
    onError: (err) => {
      if (err?.response?.data["phone"]) {
        api["error"]({
          message: "Error",
          description:
            err?.response?.data?.phone[0] || "Nimadur xatolik yuz berdi!",
        });
      } else if (err?.response?.data["password"]) {
        api["error"]({
          message: "Error",
          description:
            err?.response?.data?.password[0] || "Nimadur xatolik yuz berdi!",
        });
      } else {
        api["error"]({
          message: "Error",
          description:
            err?.response?.data?.message || "Nimadur xatolik yuz berdi!",
        });
      }
    },
  });

  const onSubmit = (data) => {
    mutate({
      phone: data?.phone.replaceAll(" ", ""),
      password: data?.password,
      is_seller: true,
    });
  };

  return {
    form,
    onSubmit,
    isLoading,
    contextHolder,
  };
};
