// import request from '@/utils/request';
import Response from "@/api/types.ts";
import { LoginResponse } from "./types";

export async function loginService(): Promise<Response<LoginResponse>> {
  //模拟接口返回数据
  return {
    code: 0,
    message: "success",
    data: {
      token: "xxxxx",
    },
  };
}
export async function registerService(): Promise<Response<null>> {
  return {
    code: 0,
    message: "success",
    data: null,
  };
}
