import { useState } from "react";
import { Button, notification } from "antd";
import { ReactComponent as IconEyes } from "@/assets/eyes.svg";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { react_query_keys } from "@/constants/react-query-keys";
import { getFlow, productDetail } from "@/shared/modules/flow";
import dayjs from "dayjs";
import { LinkButton } from "./style";
import { ReactComponent as IconCopyClipboard } from "@/assets/copy.svg";

export const useList = () => {
  const [query, setQuery] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { search } = useLocation();
  const initial_params = new URLSearchParams(search);
  const [productId, setProductId] = useState(null);
  const [params, setParams] = useState({
    page: initial_params.has("page") ? Number(initial_params.get("page")) : 1,
    limit: initial_params.has("limit")
      ? Number(initial_params.get("limit"))
      : 10,
  });

  const {
    data: flowList = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: [react_query_keys.flow_list, params, query],
    queryFn: () => getFlow(params, query),
    select: (res) => {
      return res?.data?.results;
    },
  });

  const { data: detail = null, isFetching: detailIsFetching } = useQuery({
    queryKey: ["product-detail-flow", productId],
    queryFn: () => productDetail(productId),
    select: (res) => {
      return res?.data;
    },
    enabled: productId !== null && isModalOpen ? true : false,
  });

  const handleShow = (id) => {
    setProductId(id);
    setIsModalOpen(true);
  };

  const handleCopyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      api.success({
        message: "Success",
        description: "Havola muvaffaqiyatli nusxalandi",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const columns = [
    {
      title: "Oqim nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Oqim linki",
      dataIndex: "url",
      key: "url",
      render: (url) => {
        console.log(url, "row");
        return (
          <LinkButton onClick={() => handleCopyUrl(url)}>
            {url} <IconCopyClipboard />
          </LinkButton>
        );
      },
    },
    {
      title: "Umumiy buyurtmalar",
      dataIndex: "orders",
      key: "orders",
    },
    {
      title: "Tovardan olinadigan summa",
      dataIndex: "price",
      key: "price",
      render: (price) => <p>{price === null ? 0 : price} so`m</p>,
    },
    {
      title: "Oqim yaratilgan sana",
      dataIndex: "created_date",
      key: "created_date",
      render: (text) => dayjs(text).format("DD/MM/YYYY"),
    },
    {
      title: "Ko‘rish",
      key: "action",
      render: (row) => {
        return (
          <Button
            icon={<IconEyes />}
            style={{ border: "none", background: "transparent" }}
            onClick={() => handleShow(row?.product)}
          />
        );
      },
    },
  ];

  return {
    query,
    data: flowList,
    detail,
    params,
    columns,
    setQuery,
    setParams,
    isLoading,
    isFetching,
    isModalOpen,
    contextHolder,
    setIsModalOpen,
    detailIsFetching,
  };
};
