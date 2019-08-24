import React, { Component } from 'react';
import { Button, Tabs, List, Card } from 'antd';

const { TabPane } = Tabs;

const data = [
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
];

const data1 = [
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
    '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
];

const data2 = [];

class TabsDemo extends Component {
    callback = key => {
        // console.log(key);
    };
    render() {
        return (
            <Card title="标签页">
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="未读消息（2）" key="1">
                        <List
                            size="small"
                            footer={
                                <Button type="primary">全部标记为已读</Button>
                            }
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </TabPane>
                    <TabPane tab="已读消息（2）" key="2">
                        <List
                            size="small"
                            footer={<Button type="danger">删除全部</Button>}
                            dataSource={data1}
                            renderItem={item => (
                                <List.Item
                                    actions={[
                                        <a key="list-item-delete">删除</a>
                                    ]}>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </TabPane>
                    <TabPane tab="回收站" key="3">
                        <List
                            size="small"
                            footer={<Button type="danger">清空回收站</Button>}
                            dataSource={data2}
                            renderItem={item => (
                                <List.Item
                                    actions={[
                                        <a key="list-item-return">还原</a>
                                    ]}>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </TabPane>
                </Tabs>
            </Card>
        );
    }
}
export default TabsDemo;
