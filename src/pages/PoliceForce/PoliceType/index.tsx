import React, { useEffect, useState } from "react";
import styles from './index.less';
import { PageContainer } from "@ant-design/pro-components";
import { Avatar, Button, Form, Input, InputNumber, List, Modal, Pagination, PaginationProps, Popconfirm, message } from "antd";
import { addPoliceType, deletePoliceType, editPoliceType, getPoliceTypeList } from "@/services/police/police";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Upload, { RcFile, UploadChangeParam, UploadFile, UploadProps } from "antd/lib/upload";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const PoliceType: React.FC = () => {
  /**
   * 获取警力类型
   * @param params 
   */
  const loadPoliceList = (params: API.PoliceTypeParams) => {
    getPoliceTypeList(params).then(res => {
      setPpoliceData(res.data.data);
      setTotalCount(res.data.totalCount)
      setLoading(false);
    })
  }

  /**
   * 删警力类型
   */
  const handleDel = async (policePowerId: string) => {
    try {
        await deletePoliceType({policePowerId});
        pageCallback('删除');
        return true;
    } catch (error) {
        message.error('删除失败');
        return false;
    }
  }

  const handleCancel = () => {
      setIsVisible(false);
  }

  const pageCallback = (name: string) => {
    message.success(`${name}成功`);
    loadPoliceList(defaultParams);
    handleCancel();
  }

  const onFinish = async (values: any) => {
    if (opaType === 'add') {
      try {
          await addPoliceType({...values, image: 'yigedizhi'});
          pageCallback('添加');
          return true;
      } catch (error) {
          message.error('添加失败');
          return false;
      }
    } else {
        try {
            await editPoliceType({...values, typeId: currentPolice?.typeId});
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
  const handleEdit = (policeType: API.PoliceTypeResult) => {
    setIsVisible(true);
    setOpaType('edit');
    setCurrentPolice(policeType);
    form.setFieldsValue(policeType);
  }
  
  /**分页 */
  const onChange: PaginationProps['onChange'] = (pageIndex, pageSize) => {
    setDefaultParams({
        pageIndex,
        pageSize
    })
    loadPoliceList({pageIndex, pageSize});
  };

  const [form] = Form.useForm();
  const [isVisible, setIsVisible] = useState(false);
  const [opaType, setOpaType] = useState('');
  const [loading, setLoading] = useState(false);
  const [policeData, setPpoliceData] = useState<API.PoliceTypeResult[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [defaultParams, setDefaultParams] = useState<API.FloorParams>({pageIndex: 1, pageSize: 10});
  const [imageUrl, setImageUrl] = useState<string>();
  const [currentPolice, setCurrentPolice] = useState<API.PoliceTypeResult>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      // return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        console.log(url,'===')
        setLoading(false);
        setImageUrl(url);
      });
    }
  };


  useEffect(() => {
    loadPoliceList({pageIndex: 1, pageSize: 10});
  }, []);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <PageContainer>
      <div className={styles.policeType}>
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
            dataSource={policeData}
            loading={loading}
            renderItem={(item, index) => (
              <List.Item actions={[
                <a key="list-loadmore-edit" onClick={() => handleEdit(item)}>编辑</a>,
                <Popconfirm
                    title="确认删除该警力类型?"
                    onConfirm={() => handleDel(item?.typeId)}
                    okText="确认"
                    cancelText="取消"
                >
                    <a>删除</a>
                </Popconfirm>
              ]}>
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
            onChange={onChange} />
        </div>
      </div>

      <Modal title={opaType === 'add' ? '新增' : '编辑'} open={isVisible} onCancel={handleCancel} footer={null}>
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
            <Input placeholder="请输入"/>
          </Form.Item>
          <Form.Item
            label="图片"
            name="image"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
          <Form.Item
            label="序号"
            name="sortNo"
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

export default PoliceType;

