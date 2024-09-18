import { request } from "../api/request";
import { ENDPOINTS } from "../endpoints";

export const login = (payload) => request.post(ENDPOINTS.LOGIN, payload);
