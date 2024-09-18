import { react_query_keys } from "@/constants/react-query-keys";
import {
  getCardDetail,
  getPaymentHistory,
  pendingPayment,
  updateCartDetail,
} from "@/shared/modules/payment";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Image, notification } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { formSchema } from "./form.schema";
import { format } from "date-fns";

export const useList = () => {
  const [api, contextHolder] = notification.useNotification();
  const form = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      card_number: null,
      card_name: null,
    },
  });
  const { search } = useLocation();
  const initial_params = new URLSearchParams(search);
  const [params, setParams] = useState({
    page: initial_params.has("page") ? Number(initial_params.get("page")) : 1,
    limit: initial_params.has("limit")
      ? Number(initial_params.get("limit"))
      : 10,
  });

  const { data: paymentHistory = [] } = useQuery({
    queryKey: [react_query_keys.payment_history, params],
    queryFn: () => getPaymentHistory(params),
    select: (res) => {
      return res?.data;
    },
  });

  const { refetch, isFetching } = useQuery({
    queryKey: [react_query_keys.card_detail],
    queryFn: getCardDetail,
    select: (res) => {
      return res?.data;
    },
    onSuccess: (res) => {
      form.reset({ ...res });
    },
  });
  const {
    data: paymentPending = {
      flows_count: 0,
      orders_count: 0,
      total_amount: 0,
    },
  } = useQuery({
    queryKey: [react_query_keys.pending_payment],
    queryFn: pendingPayment,
    select: (res) => {
      return {
        flows_count: res?.data?.flows_count,
        orders_count: res?.data?.orders_count,
        total_amount: res?.data?.total_amount,
      };
    },
  });

  console.log(paymentPending, "payment-pending");

  const { mutate, isLoading: saveLoading } = useMutation(
    (data) => updateCartDetail(data),
    {
      onSuccess: () => {
        refetch();
        api.success({
          message: "Success",
          description: "Ma’lumotlar muvaffaqiyatli saqlandi!",
        });
      },
    }
  );

  const onSubmit = (data) => {
    const payload = {
      card_number: data.card_number,
      card_name: data.card_name,
    };
    mutate(payload);
  };

  const columns = [
    {
      title: "Summa",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Yetkazib berilganlar soni",
      dataIndex: "orders_count",
      key: "orders_count",
    },
    {
      title: "To`lov cheki",
      dataIndex: "chek",
      key: "chek",
      render: (e) => <Image src={e} width={100} height={100}  />
    },
    {
      title: "To‘langan sana",
      dataIndex: "created_at",
      key: "created_at",
      render:(e) => format(e,`dd.MM.yyyy,HH:HH`)
    },
  ];

  return {
    form,
    data: paymentHistory?.results,
    count:paymentHistory?.count,
    params,
    columns,
    onSubmit,
    setParams,
    isFetching,
    saveLoading,
    contextHolder,
    paymentPending,
  };
};
