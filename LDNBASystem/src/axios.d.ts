import { AxiosRequestConfig } from "axios";
import {IHttpResponse} from "@src/utils/types"
declare module 'axios' {
    export interface AxiosInstance {
      <T = any>(config: AxiosRequestConfig): Promise<IHttpResponse>;
      request<T = any> (config: AxiosRequestConfig): Promise<IHttpResponse>;
      get<T = any>(url: string, config?: AxiosRequestConfig): Promise<IHttpResponse>;
      delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<IHttpResponse>;
      head<T = any>(url: string, config?: AxiosRequestConfig): Promise<IHttpResponse>;
      post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IHttpResponse>;
      put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IHttpResponse>;
      patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IHttpResponse>;
    }
  }