import { react_query_keys } from "@/constants/react-query-keys";
import { flowAnalitics } from "@/shared/modules/flow";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useList = () => {
  const { search } = useLocation();
  const initial_params = new URLSearchParams(search);
  const [params, setParams] = useState({
    page: initial_params.has("page") ? Number(initial_params.get("page")) : 1,
    limit: initial_params.has("limit")
      ? Number(initial_params.get("limit"))
      : 10,
  });

  const { data: analytics = [], isFetching } = useQuery({
    queryKey: [react_query_keys.flow_analytics, params],
    queryFn: () => flowAnalitics(params),
    select: (res) => {
      return res?.data?.results;
    },
  });

  const columns = [
    {
      title: "Oqim nomi",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Qabul qilindi",
      dataIndex: "ACCEPTED",
      key: "ACCEPTED",
    },
    {
      title: "Yo‘lda",
      dataIndex: "ON_THE_WAY",
      key: "ON_THE_WAY",
    },
    {
      title: "Bekor qilingan",
      dataIndex: "CANCELLED",
      key: "CANCELLED",
    },
    {
      title: "Qayta aloqa",
      dataIndex: "RE_CALL",
      key: "RE_CALL",
    },
    {
      title: "Yetkazilgan",
      dataIndex: "DELIVERED",
      key: "DELIVERED",
    },
    {
      title: "Jami buyurtma",
      dataIndex: "total",
      key: "total",
    },
  ];

  return {
    data: analytics,
    params,
    columns,
    setParams,
    isFetching,
  };
};
