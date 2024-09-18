import { react_query_keys } from "@/constants/react-query-keys";
import { categorListFlow, productListFlow } from "@/shared/modules/flow";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useList = () => {
  const [categories, setCategories] = useState([]);
  const [category_id, setCategory_id] = useState(null);
  const { search } = useLocation();
  const initial_params = new URLSearchParams(search);
  const [params, setParams] = useState({
    page: initial_params.has("page") ? Number(initial_params.get("page")) : 1,
    limit: initial_params.has("limit")
      ? Number(initial_params.get("limit"))
      : 12,
  });

  useQuery({
    queryKey: [react_query_keys.category_flow_list],
    queryFn: categorListFlow,
    select: (res) => {
      return res?.data;
    },
    onSuccess: (res) => {
      const oldArr = [
        {
          id: 0,
          name_uz: "Hammasi",
          name_ru: "Hammasi",
          photo: null,
          active: true,
        },
      ];
      const newArr = res?.map((v) => {
        return {
          ...v,
          active: false,
        };
      });
      setCategories([...oldArr, ...newArr]);
    },
  });
  const {
    data = {
      count: 0,
      products: [],
    },
    isFetching,
  } = useQuery({
    queryKey: [react_query_keys.product_flow_list, category_id, params],
    queryFn: () => productListFlow(category_id, params),
    select: (res) => {
      console.log(res?.data, "resss");
      return {
        count: res?.data?.count,
        products: res?.data?.results,
      };
    },
  });

  useQuery({
    queryKey: [],
  });

  return {
    count: data.count,
    params,
    products: data.products,
    setParams,
    isFetching,
    categories,
    setCategories,
    setCategory_id,
  };
};
