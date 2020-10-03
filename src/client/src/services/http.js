import { environment } from '../config/config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: environment.baseUrl,
  timeout: 20000,
  validateStatus: () => true,
  withCredentials: true,
});

const http = async (url, body, method = 'get', headers, params) => {
  try {
    const { data, status } = await axiosInstance({
      method,
      url,
      data: body,
      headers,
      params,
    });

    return { data, status };
  } catch (error) {
    console.log('Unexpected Error: ', error);
  }
};

export const httpGet = async (url, body, headers, params) => {
  return await http(url, body, 'get', headers, params);
};

export const httpPost = async (url, body, headers) => {
  return await http(url, body, 'post', headers);
};

export const httpPut = async (url, body, headers) => {
  return await http(url, body, 'put', headers);
};

export const httpPatch = async (url, body, headers) => {
  return await http(url, body, 'patch', headers);
};

export const httpDelete = async (url, body, headers) => {
  return await http(url, body, 'delete', headers);
};

export default http;
