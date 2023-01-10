import axiosClient from "./axiosClient";

const authApi = {
  customerSignup: (params) => axiosClient.post("customer", params),
  companySignup: (params) => axiosClient.post("company", params),
  verifyToken: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
