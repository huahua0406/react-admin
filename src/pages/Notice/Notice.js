import React, { Component } from 'react';
import { Button, Tabs, List } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const data = [
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
];


class Notice extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="未读消息（2）" key="1">
                    <List
                        size="small"
                        footer={<Button type="primary">全部标记为已读</Button>}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </TabPane>
                <TabPane tab="已读消息（1）" key="2">
                    <List
                        size="small"
                        footer={<Button type="danger">删除全部</Button>}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </TabPane>
                <TabPane tab="回收站" key="3">
                    <List
                        size="small"
                        footer={<Button type="danger">清空回收站</Button>}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </TabPane>
            </Tabs>
        );
    }
}
export default Notice;
