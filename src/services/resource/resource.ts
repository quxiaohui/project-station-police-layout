// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
const prefix = '/pdapi';

/** 获取资源类型 */
export async function getResourceTypeList(
  params: API.PoliceTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.Police>(`${prefix}/resourceTypes`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加资源类型 */
export async function addResourceType(
  params: API.PoliceTypeResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult>(`${prefix}/resourceTypes`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** 编辑资源类型 */
export async function editResourceType(
  params: API.PoliceTypeResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult>(`${prefix}/resourceTypes`, {
    method: 'PUT',
    data: params,
    ...(options || {}),
  });
}

/** 删除资源类型 */
export async function deleteResourceType(
  params: {
    resourceId: string;
  },
  options?: { [key: string]: any },
) {
  console.log(params);
  return request<API.PoliceTypeResult[]>(`${prefix}/resourceTypes`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取资源部署 */
export async function getResourceDeploymentList(
  params: API.PoliceDeploymentParams,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeployment>(`${prefix}/resourceDeployments`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加资源部署 */
export async function addResourceDeployment(
  params: API.PoliceDeploymentResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeploymentResult>(`${prefix}/resourceDeployments`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** 编辑资源部署 */
export async function editResourceDeployment(
  params: API.PoliceDeploymentResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeploymentResult>(`${prefix}/resourceDeployments`, {
    method: 'PUT',
    data: params,
    ...(options || {}),
  });
}

/** 删除资源部署 */
export async function deleteResourceDeployment(
  params: {
    resourceId: string;
  },
  options?: { [key: string]: any },
) {
  console.log(params);
  return request<API.PoliceDeploymentResult[]>(`${prefix}/resourceDeployments`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**获取资源类型--下拉框 */
export async function getResourceSelect(
  // params: API.FloorParams,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult[]>(`${prefix}/resourceTypes/selector`, {
    method: 'GET',
    // params: {
    //   ...params,
    // },
    ...(options?.data || []),
  });
}
