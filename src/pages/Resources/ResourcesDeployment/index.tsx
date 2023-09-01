import React, { useEffect, useState } from "react";
import styles from './index.less';
import { PageContainer } from "@ant-design/pro-components";
import { Button, Card, Form, Input, InputNumber, Modal, Pagination, PaginationProps, Popconfirm, Select, message } from "antd";
import { addResourceDeployment, deleteResourceDeployment, getResourceDeploymentList, getResourceSelect } from "@/services/resource/resource";
import { getFloorSelect } from "@/services/floor/floor";

const ResourcesDeployment: React.FC = () => {

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [opaType, setOpaType] = useState('');
  const [loading, setLoading] = useState(false);
  const [resourceDeploymentData, setSourceDeploymentData] = useState<API.ResourceDeploymentResult[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [defaultParams, setDefaultParams] = useState<API.ResourceDeploymentParams>({pageIndex: 1, pageSize: 10, floorId: ''});
  const [currentResource, setCurrentResource] = useState<API.ResourceDeploymentResult>();
  const [floorSelectList, setFloorSelectList] = useState<API.SelectOptions[]>();
  const [resourceTypeList, setResourceTypeListList] = useState<API.SelectOptions[]>();

  const loadResourceDeploymentList = () => {
    setLoading(true);
    getResourceDeploymentList(defaultParams)
      .then(res => {
        setSourceDeploymentData(res?.data?.data);
        setTotalCount(res.data?.totalCount);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
      })
  }

  /**获取楼层-下拉框 */
  const loadFloorSelect = () => {
    getFloorSelect().then(res => {
      const list: API.SelectOptions[] = res?.data.map(item => {
        return {label: item.floorName, value: item.floorId};
      })
      setFloorSelectList(list);
    });
  }

  /**获取警力类型-下拉框 */
  const loadSourceSelect = () => {
    getResourceSelect().then(res => {
      const list: API.SelectOptions[] = res?.data.map(item => {
        return {label: item.name, value: item.typeId};
      })
      setResourceTypeListList(list);
    });
  }

  const clickAddBtn = () => {
    setOpaType('add');
    form.resetFields();
    handleCancel(true);
  }

  /**
   * 编辑楼层
   */
  const handleEdit = (SourceDType: API.ResourceDeploymentResult) => {
    setOpaType('edit');
    setCurrentResource(SourceDType);
    form.setFieldsValue(SourceDType);
    handleCancel(true);
  }

  /**
   * 删警力类型
   */
  const handleDel = async (resourceId: string) => {
    try {
        await deleteResourceDeployment({resourceId});
        pageCallback('删除');
        return true;
    } catch (error) {
        message.error('删除失败');
        return false;
    }
  }
  const handleCancel = (visible: boolean) => {
    setIsVisible(visible);
    if (visible) {
      loadSourceSelect();
    }
  }

  const pageCallback = (name: string) => {
    message.success(`${name}成功`);
    loadResourceDeploymentList();
    handleCancel(false);
  }

  const onFinish = async (values: any) => {
    console.log(values,'===')
    if (opaType === 'add') {
      try {
          await addResourceDeployment({...values});
          pageCallback('添加');
          return true;
      } catch (error) {
          message.error('添加失败');
          return false;
      }
    } else {
        try {
            await addResourceDeployment({...values, deploymentId: currentResource?.deploymentId});
            pageCallback('编辑');
            return true;
        } catch (error) {
            message.error('编辑失败');
            return false;
        }
    }
  }
  const onChange: PaginationProps['onChange'] = (pageIndex, pageSize) => {
    setDefaultParams({
        pageIndex,
        pageSize,
        floorId: defaultParams?.floorId
    });
  };

  const floorChange = (value: string) => {
    setDefaultParams({
      pageIndex: 1,
      pageSize: 10,
      floorId: value
  })
  }

  useEffect(() => {
    loadResourceDeploymentList();
    loadFloorSelect();
  }, []);

  useEffect(() => {
    loadResourceDeploymentList();
  }, [defaultParams]);

  return (
    <PageContainer>
      <div className={styles.resourceDeployment}>
        <div className={styles.conditions}>
          <Select
            allowClear
            placeholder="请选择楼层"
            style={{ width: '250px' }}
            options={floorSelectList}
            onChange={(value) => floorChange(value)}
          />
          <div className={styles.btns}>
            <Button
              type="primary"
              onClick={clickAddBtn}
            >
              新增
            </Button>
          </div>
        </div>
        
        <div className={styles.card}>
            {
              resourceDeploymentData?.map(item => {
                return (
                  <div className={styles.cardItem} key={item.deploymentId}>
                    <Card title={item?.title} bordered={false} loading={loading}
                      actions={[
                        <a key="list-loadmore-edit" onClick={() => handleEdit(item)}>编辑</a>,
                        <Popconfirm
                            title="确认删除该资源部署?"
                            onConfirm={() => handleDel(item?.deploymentId)}
                            okText="确认"
                            cancelText="取消"
                        >
                            <a>删除</a>
                        </Popconfirm>
                      ]}
                      >
                      <p>楼层：{item.floorName}</p>
                      <p>资源类型：{item.typeName}</p>
                      <p>X：{item.positionX}</p>
                      <p>Y：{item.positionY}</p>
                      <p>Z：{item.positionZ}</p>
                    </Card>
                  </div>
                )
              })
            }
        </div>
        <div className={styles.pagination}>
          <Pagination
            total={totalCount}
            showTotal={() => `共${totalCount}条数据`}
            showQuickJumper
            showSizeChanger
            current={defaultParams.pageIndex}
            onChange={onChange} />
        </div>
      </div>
      <Modal title={opaType === 'add' ? '新增' : '编辑'} open={isVisible} onCancel={() => handleCancel(false)} footer={null}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="名称"
            name="title"
            rules={[{ required: true, message: '请输入名称' }]}
          >
            <Input placeholder="请输入"/>
          </Form.Item>
          <Form.Item
            label="楼层"
            name="floorId"
            rules={[{ required: true, message: '请选择楼层' }]}
          >
            <Select
              style={{ width: '100%' }}
              options={floorSelectList}
            />
          </Form.Item>
          <Form.Item
            label="资源类型"
            name="typeId"
            rules={[{ required: true, message: '请选择资源类型' }]}
          >
            <Select
              style={{ width: '100%' }}
              options={resourceTypeList}
            />
          </Form.Item>
          <Form.Item
            label="X"
            name="positionX"
            rules={[{ required: true, message: '请输入positionX' }]}
          >
            <InputNumber placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="Y"
            name="positionY"
            rules={[{ required: true, message: '请输入positionY' }]}
          >
            <InputNumber placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="Z"
            name="positionZ"
            rules={[{ required: true, message: '请输入positionZ' }]}
          >
            <InputNumber placeholder="请输入" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
};

export default ResourcesDeployment;