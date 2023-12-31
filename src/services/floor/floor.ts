 // @ts-ignore
/* eslint-disable */
import { request } from 'umi';
const prefix = '/pdapi';

/** 获取楼层 */
export async function getFloorList(
  params: API.FloorParams,
  options?: { [key: string]: any },
) {
  return request<API.Floor>(`${prefix}/floors`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加楼层 */
export async function addFloor(
  params: API.FloorResult,
  options?: { [key: string]: any },
) {
  return request<API.FloorResult>(`${prefix}/floors`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** 编辑楼层 */
export async function editFloor(
  params: API.FloorResult,
  options?: { [key: string]: any },
) {
  return request<API.FloorResult>(`${prefix}/floors`, {
    method: 'PUT',
    data: params,
    ...(options || {}),
  });
}

/** 删除楼层 */
export async function deleteFloor(
  params: {
    floorId: string,
  },
  options?: { [key: string]: any },
) {
  console.log(params)
  return request<API.FloorResult[]>(`${prefix}/floors`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**获取楼层--下拉框 */
export async function getFloorSelect(
  // params: API.FloorParams,
  options?: { [key: string]: any },
) {
  return request<API.FloorResult[]>(`${prefix}/floors/selector`, {
    method: 'GET',
    // params: {
    //   ...params,
    // },
    ...(options?.data || []),
  });
}