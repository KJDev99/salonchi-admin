import { request } from "@/shared/api/request";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useVerify = () => {
  const form = useForm();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userData"));

  const { mutate, isLoading } = useMutation(
    (data) => request.post("user/verify", data),
    {
      onSuccess: (res) => {
        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        navigate("/admin/statistics");
      },
      onError: (err) => {
        console.log(err?.response?.data?.detail);
      },
    }
  );

  const onSubmit = (data) => {
    const payload = {
      phone: user?.phone,
      code: Number(data.code),
      is_seller: true,
    };
    mutate(payload);
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};
