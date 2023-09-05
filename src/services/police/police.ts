 // @ts-ignore
/* eslint-disable */
import { request } from 'umi';
const prefix = '/pdapi';

/** 获取经历类型 */
export async function getPoliceTypeList(
  params: API.PoliceTypeParams,
  options?: { [key: string]: any },
) {
  return request<API.Police>(`${prefix}/PolicePowerTypes`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 添加警力类型 */
export async function addPoliceType(
  params: API.PoliceTypeResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult>(`${prefix}/PolicePowerTypes`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** 编辑警力类型 */
export async function editPoliceType(
  params: API.PoliceTypeResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult>(`${prefix}/PolicePowerTypes`, {
    method: 'PUT',
    data: params,
    ...(options || {}),
  });
}

/** 删除警力类型 */
export async function deletePoliceType(
  params: {
    policePowerId: string,
  },
  options?: { [key: string]: any },
) {
  console.log(params)
  return request<API.PoliceTypeResult[]>(`${prefix}/PolicePowerTypes`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取警力部署 */
export async function getPoliceDeploymentList(
  params: API.PoliceDeploymentParams,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeployment>(`${prefix}/policePowerDeployments`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 添加警力部署 */
export async function addPoliceDeployment(
  params: API.PoliceDeploymentResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeploymentResult>(`${prefix}/policePowerDeployments`, {
    method: 'POST',
    data: params,
    ...(options || {}),
  });
}

/** 编辑警力部署 */
export async function editPoliceDeployment(
  params: API.PoliceDeploymentResult,
  options?: { [key: string]: any },
) {
  return request<API.PoliceDeploymentResult>(`${prefix}/policePowerDeployments`, {
    method: 'PUT',
    data: params,
    ...(options || {}),
  });
}

/** 删除警力部署 */
export async function deletePoliceDeployment(
  params: {
    policePowerId: string,
  },
  options?: { [key: string]: any },
) {
  console.log(params)
  return request<API.PoliceDeploymentResult[]>(`${prefix}/policePowerDeployments`, {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/**获取警力类型--下拉框 */
export async function getPoliceSelect(
  // params: API.FloorParams,
  options?: { [key: string]: any },
) {
  return request<API.PoliceTypeResult[]>(`${prefix}/policePowerTypes/selector`, {
    method: 'GET',
    // params: {
    //   ...params,
    // },
    ...(options?.data || []),
  });
}