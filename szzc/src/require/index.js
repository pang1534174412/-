import axios from "axios";

export default function (config) {
  const instance = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 2000,
  });
  instance.interceptors.request.use(
    function (config) {
      // 在发送请求之前做些什么
      let token = sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      if (response.data.status === 400) {
        // router.replace('/')
      }
      return response.data;
    },
    function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  return instance(config);
}
