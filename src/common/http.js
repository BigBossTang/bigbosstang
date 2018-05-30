import axios from "axios";
import Qs from "qs";
const URL = "/";
window.URL = URL;

const axiosType = (type, path, data, option) => {
  let resData = data || {};

  if (type.toUpperCase() === "GET") {
    resData.t = new Date().getTime();
    return axios({
      method: type,
      url: URL + path,
      params: resData
    });
  } else if (type.toUpperCase() === "POST") {
    resData = Qs.stringify(resData);
    return axios({
      method: type,
      url: URL + path,
      data: resData
    });
  }
};

/**
 * 网站统一获取接口函数
 *
 * @param {any} {type = 'GET', path, data} 方式 路径 上传的数据
 * @returns
 */
export const http = (
  method,
  url,
  params,
  option
) => {
  return axiosType(method, url, params, option)
    .then(res => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(res => {
      return res;
    });
};

export default axios;
