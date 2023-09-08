import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  List,
  Modal,
  Pagination,
  PaginationProps,
  Popconfirm,
  message,
} from 'antd';
import {
  addResourceType,
  deleteResourceType,
  editResourceType,
  getResourceTypeList,
} from '@/services/resource/resource';

const ResourcesType = () => {
  /* 获取资源型
   * @param params
   */
  const loadResourceList = (params) => {
    getResourceTypeList(params).then((res) => {
      setResourceData(res.data.data);
      setTotalCount(res.data.totalCount);
      setLoading(false);
    });
  };
  /**
   * 删警力类型
   */
  const handleDel = async (policePowerId) => {
    try {
      await deleteResourceType({ policePowerId });
      pageCallback('删除');
      return true;
    } catch (error) {
      message.error('删除失败');
      return false;
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const pageCallback = (name) => {
    message.success(`${name}成功`);
    loadResourceList(defaultParams);
    handleCancel();
  };

  const onFinish = async (values) => {
    if (opaType === 'add') {
      try {
        await addResourceType({ ...values, image: 'yigedizhi' });
        pageCallback('添加');
        return true;
      } catch (error) {
        message.error('添加失败');
        return false;
      }
    } else {
      try {
        await editResourceType({ ...values, typeId: currentResource?.typeId });
        pageCallback('编辑');
        return true;
      } catch (error) {
        message.error('编辑失败');
        return false;
      }
    }
  };

  /**
   * 编辑警力类型
   */
  const handleEdit = (policeType) => {
    setIsVisible(true);
    setOpaType('edit');
    setCurrentResource(policeType);
    form.setFieldsValue(policeType);
  };

  /**分页 */
  const onChange = (pageIndex, pageSize) => {
    setDefaultParams({
      pageIndex,
      pageSize,
    });
    loadResourceList({ pageIndex, pageSize });
  };

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [opaType, setOpaType] = useState('');
  const [loading, setLoading] = useState(false);
  const [resourceData, setResourceData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [defaultParams, setDefaultParams] = useState({ pageIndex: 1, pageSize: 10 });
  const [currentResource, setCurrentResource] = useState();
  useEffect(() => {
    loadResourceList({ pageIndex: 1, pageSize: 10 });
  }, []);
  return (
    <PageContainer>
      <div className={styles.resourceType}>
        <Button
          type="primary"
          onClick={() => {
            setIsVisible(true);
            setOpaType('add');
            form.resetFields();
          }}
        >
          新增
        </Button>

        <div className={styles.list}>
          <List
            itemLayout="horizontal"
            dataSource={resourceData}
            loading={loading}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <a key="list-loadmore-edit" onClick={() => handleEdit(item)}>
                    编辑
                  </a>,
                  <Popconfirm
                    title="确认删除该资源类型?"
                    onConfirm={() => handleDel(item?.typeId)}
                    okText="确认"
                    cancelText="取消"
                  >
                    <a>删除</a>
                  </Popconfirm>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={<a>{item.name}</a>}
                  description=""
                />
              </List.Item>
            )}
          />
        </div>
        <div className={styles.pagination}>
          <Pagination
            total={totalCount}
            showTotal={() => `共${totalCount}条数据`}
            showQuickJumper
            showSizeChanger
            current={defaultParams.pageIndex}
            onChange={onChange}
          />
        </div>

        <Modal
          title={opaType === 'add' ? '新增' : '编辑'}
          open={isVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="类型名称"
              name="name"
              rules={[{ required: true, message: '请输入名称' }]}
            >
              <Input placeholder="请输入" />
            </Form.Item>
            <Form.Item label="图片" name="image"></Form.Item>
            <Form.Item label="序号" name="sortNo">
              <InputNumber placeholder="请输入" />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 10, span: 10 }}>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageContainer>
  );
};

export default ResourcesType;
