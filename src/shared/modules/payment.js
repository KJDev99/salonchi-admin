import { request } from "../api/request";
import { ENDPOINTS } from "../endpoints";

export const getPaymentHistory = (params) =>
  request(ENDPOINTS.PAYMENT_HISTORY, {
    params: {
      page: params.page,
      limit: params.limit,
    },
  });
export const getCardDetail = () => request(ENDPOINTS.CARD_DETAIL);

export const updateCartDetail = (payload) =>
  request.post(ENDPOINTS.CARD_DETAIL, payload);

export const pendingPayment = () => request(ENDPOINTS.PENDING_PAYMENT);
