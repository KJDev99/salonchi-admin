import { useRegions } from "@/hooks/useRegions";
import { request } from "@/shared/api/request";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formSchema } from "./form.schema";

export const useRegister = () => {
  const form = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();
  const regions = useRegions();

  const { mutate, isLoading } = useMutation(
    (data) => request.post("/user/register", data),
    {
      onSuccess: (res) => {
        localStorage.setItem("userData", JSON.stringify(res?.data));
        navigate("/verify");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const onSubmit = (data) => {
    mutate({
      ...data,
      is_seller: true,
      phone: data.phone?.replaceAll(" ", ""),
    });
  };

  return {
    form,
    regions,
    onSubmit,
    isLoading,
  };
};
