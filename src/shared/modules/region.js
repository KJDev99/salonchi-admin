import { request } from "../api/request";
import { ENDPOINTS } from "../endpoints";

export const getRegions = () => request(ENDPOINTS.REGION_LIST);
