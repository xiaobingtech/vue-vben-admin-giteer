import type { UserInfo } from '@vben/types';

import { requestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}

/**
 * 获取所有用户列表
 */
export async function getAllUsersApi(params: {
  page: number;
  pageSize: number;
}) {
  return requestClient.get<{
    code: number;
    data: {
      list: Array<{
        avatar: string;
        device: number;
        id: string;
        lat: number;
        lng: number;
        login: string;
        name: string;
        uid: string;
      }>;
      total: number;
      totalPage: number;
    };
    message: string;
  }>('https://api.giteer.xiaobingkj.com/user/list', { params });
}
