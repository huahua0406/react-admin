import React, { Component } from 'react';
import { Table, Divider, Tag, Button, message, Modal } from 'antd';

class BaseTable extends Component {
    state = {
        data: [],
        loading: false,
        page: 1,
        selectedRowKeys: [],
        columns : [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>
            },
            {
                title: '余额',
                dataIndex: 'money',
                key: 'money'
            },
            {
                title: '头像',
                dataIndex: 'thumb',
                key: 'thumb',
                render: url => <img src={url} width="40" />
            },
            {
                title: '地区',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render: state => {
                    if (state == '审核中') {
                        return <Tag color="geekblue">审核中</Tag>;
                    } else if (state == '成功') {
                        return <Tag color="green">成功</Tag>;
                    } else {
                        return <Tag color="volcano">失败</Tag>;
                    }
                }
            },
            {
                title: '注册时间',
                dataIndex: 'date',
                key: 'date'
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={() => this.handleEdit(record)}>编辑</a>
                        <Divider type="vertical" />
                        <a href="javascript:;" onClick={() => this.handleDelete(record)}>删除</a>
                    </span>
                )
            }
        ]
    };

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        this.setState({ loading: true });
        const result = await Api.getTableList({
            page: this.state.page
        });
        const data = result.data.list;
        const total = 100;
        this.setState({
            loading: false,
            data,
            total,
            selectedRowKeys: []
        });
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    handleBatchDelete = () => {
        message.info('删除的id:' + this.state.selectedRowKeys.join(','));
    }

    handleEdit = record => {
        console.log(record);
        Modal.info({
            title: '信息',
            content: `用户名：${record.name},余额${record.money}`
        });
    }

    handleDelete = record => {
        console.log(record);
        Modal.confirm({
            title: '删除提示',
            content: `您确定要删除该用户【${record.name}】数据吗？`,
            onOk: () => {
                message.success('删除成功')
                //TODO: 重新刷新页面
            }
        })
    }

      

    onCurrentChange = page => {
        this.setState({
                page
            },
            () => {
                this.getData();
            }
        );
    };

    render() {
        
        const { data, loading, selectedRowKeys, columns, } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="danger"
                        onClick={this.handleBatchDelete}
                        disabled={!hasSelected}>
                        批量删除
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected
                            ? `Selected ${selectedRowKeys.length} items`
                            : ''}
                    </span>
                </div>
                <Table
                    bordered
                    loading={loading}
                    rowSelection={rowSelection}
                    columns={columns}
                    rowKey={item => item.id}
                    dataSource={data}
                    pagination={{
                        hideOnSinglePage: true,
                        current: this.state.page,
                        total: this.state.total,
                        onChange: this.onCurrentChange
                    }}
                />
            </div>
        );
    }
}
export default BaseTable;
