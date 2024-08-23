// import request from '@/utils/request';
import Response from '@/api/types.ts';
import { LoginResponse,LoginRequest } from './types';

export async function loginService(data:LoginRequest): Promise<Response<LoginResponse>> {
  // return request.post("api/user/login", data);
  //模拟接口返回数据
  return {
    code: 0,
    message: "success",
    data: {
      token: "xxxxx"
    }
  }
}
export async function registerService(data:LoginRequest): Promise<Response<null>> {
  // return request.post("api/user/register", data);
  return {
    code: 0,
    message: "success",
    data: null
  }
}
