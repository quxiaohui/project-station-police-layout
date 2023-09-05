import React, { useEffect, useState } from "react";
import styles from './index.less';
import { PageContainer } from "@ant-design/pro-components";
import { Button, Form, Input, InputNumber, Modal, Pagination, PaginationProps, Popconfirm, Space, Table, message } from "antd";
import { addFloor, deleteFloor, editFloor, getFloorList } from "@/services/floor/floor";

const FloorManagement: React.FC = () => {
    /**
     * 获取楼层
     */
    const loadFloorList = async (defaultParams: API.FloorParams) => {
        setLoading(true);
        getFloorList(defaultParams).then(res => {
            setTableData(res.data.data);
            setTotalCount(res.data.totalCount)
            setLoading(false);
        }).catch(err => {
            setLoading(false);
        })
    }
     
    /**
     * 删除楼层
     */
    const handleDel = async (floorId: string) => {
        try {
            await deleteFloor({floorId});
            pageCallback('删除');
            return true;
        } catch (error) {
            message.error('删除失败');
            return false;
        }
    }

    /**
     * 编辑楼层
     */
    const handleEdit = (floor: API.FloorResult) => {
        setIsVisible(true);
        setOpaType('edit');
        setCurrentFloor(floor);
        form.setFieldsValue(floor);
    }

    const handleCancel = () => {
        setIsVisible(false);
    }

    const pageCallback = (name: string) => {
        message.success(`${name}成功`);
        loadFloorList(defaultParams);
        handleCancel();
    }

    const onFinish = async (values: API.FloorResult) => {
        if (opaType === 'add') {
            try {
                await addFloor(values);
                pageCallback('添加');
                return true;
            } catch (error) {
                message.error('添加失败');
                return false;
            }
        } else {
            try {
                await editFloor({...values, floorId: currentFloor?.floorId});
                pageCallback('编辑');
                return true;
            } catch (error) {
                message.error('编辑失败');
                return false;
            }
        }
    };

    const onChange: PaginationProps['onChange'] = (pageIndex, pageSize) => {
        setDefaultParams({
            pageIndex,
            pageSize
        })
        loadFloorList({pageIndex, pageSize});
    };

    const [form] = Form.useForm();
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [opaType, setOpaType] = useState('');
    const [tableData, setTableData] = useState<API.FloorResult[]>([]);
    const [currentFloor, setCurrentFloor] = useState<API.FloorResult>();
    const [totalCount, setTotalCount] = useState<number>(0);
    const [defaultParams, setDefaultParams] = useState<API.FloorParams>({pageIndex: 1, pageSize: 10});

    useEffect(() => {
      loadFloorList({pageIndex: 1, pageSize: 10});
    }, []);

    const columns = [
        {
            title: '楼层名称',
            dataIndex: 'floorName',
            key: 'floorName',
        },
        {
            title: '楼层标题',
            dataIndex: 'floorTitle',
            key: 'floorTitle',
        },
        {
            title: '操作',
            dataIndex: 'opa',
            key: 'floorId',
            render: (_, record: API.FloorResult ) => <Space size="middle">
                <a onClick={() => handleEdit(record)}>编辑</a>
                <Popconfirm
                    title="确认删除该楼层?"
                    onConfirm={() => handleDel(record?.floorId)}
                    okText="确认"
                    cancelText="取消"
                >
                    <a>删除</a>
                </Popconfirm>
            </Space>
        },
    ];

    return (
        <PageContainer>
            <div className={styles.floorManagement}>
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

                <div className={styles.table}>
                    <Table
                        dataSource={tableData}
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
                        onChange={onChange} />
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
                            label="楼层名称"
                            name="floorName"
                            rules={[{ required: true, message: '请输入楼层名称' }]}
                        >
                            <Input placeholder="请输入"/>
                        </Form.Item>
                        <Form.Item
                            label="楼层标题"
                            name="floorTitle"
                            rules={[{ required: true, message: '请输入楼层标题' }]}
                        >
                            <Input placeholder="请输入"/>
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
            </div>
        </PageContainer>
    );
  };

  export default FloorManagement;