import { request } from "../api/request";
import { ENDPOINTS } from "../endpoints";

export const createFlow = (payload) =>
  request.post(ENDPOINTS.CREATE_FLOW, payload);

export const categorListFlow = () => request(ENDPOINTS.CATEGORY_LIST_FLOW);
export const productListFlow = (category_id, params) =>
  request(ENDPOINTS.PRODUCT_LIST_FLOW, {
    params: {
      page: params.page,
      limit: params.limit,
      category_id: category_id === 0 ? null : category_id,
    },
  });

export const productListByCategory = (id) =>
  request(ENDPOINTS.PRODUCT_LIST_FLOW + `/${id}`);

export const productDetail = (id) => request(`product/detail/${id}/flow`);

export const flowAnalitics = (params) =>
  request(ENDPOINTS.FLOW_ANALITICS, {
    params: {
      page: params.page,
      limit: params.limit,
    },
  });

export const getFlow = (params, query) =>
  request(ENDPOINTS.FLOW_LIST, {
    params: {
      page: params.page,
      limit: params.limit,
      search: query,
    },
  });
