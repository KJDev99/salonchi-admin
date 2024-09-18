import { request } from "../api/request";
import { ENDPOINTS } from "../endpoints";

export const userProfile = () => request(ENDPOINTS.USER_PROFILE);

export const profileUpdate = (payload) =>
  request.put(ENDPOINTS.PROFILE_UPDATE, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
