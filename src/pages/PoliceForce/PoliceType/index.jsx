import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { PageContainer } from '@ant-design/pro-components';
import {
  Avatar,
  Button,
  Form,
  Input,
  InputNumber,
  Table,
  Modal,
  Pagination,
  PaginationProps,
  Popconfirm,
  message,
} from 'antd';
import {
  addPoliceType,
  deletePoliceType,
  editPoliceType,
  getPoliceTypeList,
} from '@/services/police/police';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import Upload, { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const PoliceType = () => {
  /**
   * 获取警力类型
   * @param params
   */
  const loadPoliceList = (params) => {
    getPoliceTypeList(params).then((res) => {
      setPpoliceData(res.data.data);
      setTotalCount(res.data.totalCount);
      setLoading(false);
    });
  };

  /**
   * 删警力类型
   */
  const handleDel = async (policePowerId) => {
    try {
      await deletePoliceType({ policePowerId });
      pageCallback('删除');
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const pageCallback = (name) => {
    message.success(`${name}成功`);
    loadPoliceList(defaultParams);
    handleCancel();
  };

  const onFinish = async (values) => {
    if (opaType === 'add') {
      try {
        await addPoliceType({ ...values, image: 'yigedizhi' });
        pageCallback('添加');
        return true;
      } catch (error) {
        message.error('添加失败');
        return false;
      }
    } else {
      try {
        await editPoliceType({ ...values, typeId: currentPolice?.typeId });
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
    setCurrentPolice(policeType);
    form.setFieldsValue(policeType);
  };

  /**分页 */
  const onChange = (pageIndex, pageSize) => {
    setDefaultParams({
      pageIndex,
      pageSize,
    });
    loadPoliceList({ pageIndex, pageSize });
  };

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [opaType, setOpaType] = useState('');
  const [loading, setLoading] = useState(false);
  const [policeData, setPpoliceData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [defaultParams, setDefaultParams] = useState({ pageIndex: 1, pageSize: 10 });
  const [imageUrl, setImageUrl] = useState();
  const [currentPolice, setCurrentPolice] = useState();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      // return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        console.log(url, '===');
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  useEffect(() => {
    loadPoliceList({ pageIndex: 1, pageSize: 10 });
  }, []);

  const columns = [
    {
      title: '类型名称',
      dataIndex: 'name',
      key: 'name',
    },
  ];
  return (
    <PageContainer>
      <div className={styles.policeType}>
        {/* <Button
          type="primary"
          onClick={() => {
            setIsVisible(true);
            setOpaType('add');
            form.resetFields();
          }}
        >
          新增
        </Button> */}
        <div className={styles.table}>
          <Table
            dataSource={policeData}
            columns={columns}
            loading={loading}
            size="middle"
            pagination={false}
            scroll={{ y: 500 }}
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
    </PageContainer>
  );
};

export default PoliceType;
