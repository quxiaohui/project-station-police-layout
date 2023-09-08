import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Pagination,
  PaginationProps,
  Popconfirm,
  Row,
  Select,
  message,
} from 'antd';
import {
  addPoliceDeployment,
  deletePoliceDeployment,
  editPoliceDeployment,
  getPoliceDeploymentList,
  getPoliceSelect,
} from '@/services/police/police';
import { getFloorSelect } from '@/services/floor/floor';

const PoliceDeployment = () => {
  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [opaType, setOpaType] = useState('');
  const [loading, setLoading] = useState(false);
  const [policeDeploymentData, setPoliceDeploymentData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [defaultParams, setDefaultParams] = useState({ pageIndex: 1, pageSize: 10, floorId: '' });
  const [currentPolice, setCurrentPolice] = useState();
  const [floorSelectList, setFloorSelectList] = useState();
  const [policeTypeList, setPoliceTypeListList] = useState();

  const loadPoliceDeploymentList = () => {
    setLoading(true);
    getPoliceDeploymentList(defaultParams)
      .then((res) => {
        setPoliceDeploymentData(res?.data?.data);
        setTotalCount(res.data?.totalCount);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  /**获取楼层-下拉框 */
  const loadFloorSelect = () => {
    getFloorSelect().then((res) => {
      const list = res?.data.map((item) => {
        return { label: item.floorName, value: item.floorId };
      });
      setFloorSelectList(list);
    });
  };

  /**获取警力类型-下拉框 */
  const loadPoliceSelect = () => {
    getPoliceSelect().then((res) => {
      const list = res?.data.map((item) => {
        return { label: item.name, value: item.typeId };
      });
      setPoliceTypeListList(list);
    });
  };

  const clickAddBtn = () => {
    setOpaType('add');
    form.resetFields();
    handleCancel(true);
  };

  /**
   * 编辑楼层
   */
  const handleEdit = (policeDType) => {
    setOpaType('edit');
    setCurrentPolice(policeDType);
    form.setFieldsValue(policeDType);
    handleCancel(true);
  };

  /**
   * 删警力类型
   */
  const handleDel = async (policePowerId) => {
    try {
      await deletePoliceDeployment({ policePowerId });
      pageCallback('删除');
      return true;
    } catch (error) {
      message.error('删除失败');
      return false;
    }
  };
  const handleCancel = (visible) => {
    setIsVisible(visible);
    if (visible) {
      loadPoliceSelect();
    }
  };

  const pageCallback = (name) => {
    message.success(`${name}成功`);
    loadPoliceDeploymentList();
    handleCancel(false);
  };

  const onFinish = async (values) => {
    console.log(values, '===');
    if (opaType === 'add') {
      try {
        await addPoliceDeployment({ ...values });
        pageCallback('添加');
        return true;
      } catch (error) {
        message.error('添加失败');
        return false;
      }
    } else {
      try {
        await editPoliceDeployment({ ...values, deploymentId: currentPolice?.deploymentId });
        pageCallback('编辑');
        return true;
      } catch (error) {
        message.error('编辑失败');
        return false;
      }
    }
  };
  const onChange = (pageIndex, pageSize) => {
    setDefaultParams({
      pageIndex,
      pageSize,
      floorId: defaultParams?.floorId,
    });
  };

  const floorChange = (value) => {
    setDefaultParams({
      pageIndex: 1,
      pageSize: 10,
      floorId: value,
    });
  };

  useEffect(() => {
    loadPoliceDeploymentList();
    loadFloorSelect();
  }, []);

  useEffect(() => {
    loadPoliceDeploymentList();
  }, [defaultParams]);

  return (
    <PageContainer>
      <div className={styles.policeDeployment}>
        <div className={styles.conditions}>
          <Select
            allowClear
            placeholder="请选择楼层"
            style={{ width: '250px' }}
            options={floorSelectList}
            onChange={(value) => floorChange(value)}
          />
          <div className={styles.btns}>
            <Button type="primary" onClick={clickAddBtn}>
              新增
            </Button>
          </div>
        </div>

        <div className={styles.card}>
          {policeDeploymentData?.map((item) => {
            return (
              <div className={styles.cardItem} key={item.deploymentId}>
                <Card
                  title={item?.title}
                  bordered={false}
                  loading={loading}
                  actions={[
                    <a key="list-loadmore-edit" onClick={() => handleEdit(item)}>
                      编辑
                    </a>,
                    <Popconfirm
                      title="确认删除该警力部署?"
                      onConfirm={() => handleDel(item?.deploymentId)}
                      okText="确认"
                      cancelText="取消"
                    >
                      <a>删除</a>
                    </Popconfirm>,
                  ]}
                >
                  <p>楼层：{item.floorName}</p>
                  <p>警力类型：{item.typeName}</p>
                  <p>X：{item.positionX}</p>
                  <p>Y：{item.positionY}</p>
                  <p>Z：{item.positionZ}</p>
                </Card>
              </div>
            );
          })}
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
      </div>
      <Modal
        title={opaType === 'add' ? '新增' : '编辑'}
        open={isVisible}
        onCancel={() => handleCancel(false)}
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
          <Form.Item label="名称" name="title" rules={[{ required: true, message: '请输入名称' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="楼层"
            name="floorId"
            rules={[{ required: true, message: '请选择警力楼层' }]}
          >
            <Select style={{ width: '100%' }} options={floorSelectList} />
          </Form.Item>
          <Form.Item
            label="警力类型"
            name="typeId"
            rules={[{ required: true, message: '请选择警力类型' }]}
          >
            <Select style={{ width: '100%' }} options={policeTypeList} />
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

export default PoliceDeployment;
