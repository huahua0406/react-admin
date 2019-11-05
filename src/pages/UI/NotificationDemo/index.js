import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';

const cardStyles = {
    marginBottom: 20
};

class NotificationDemo extends Component {
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            }
        });
    };
    openNotification2 = () => {
        const args = {
            message: 'Notification Title',
            description:
                'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: 0
        };
        notification.open(args);
    };
    render() {
        return (
            <div>
                <Card title="通知提醒框" style={cardStyles}>
                    <Button type="primary" onClick={this.openNotification}>
                        基本用法-4.5s关闭
                    </Button>
                    &emsp;
                    <Button type="primary" onClick={this.openNotification2}>
                        取消自动关闭
                    </Button>
                </Card>
            </div>
        );
    }
}

export default NotificationDemo;
