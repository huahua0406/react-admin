import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class CustomBreadcrumb extends Component {
    render() {
        return (
            <Breadcrumb
                style={{
                    padding: '12px 24px'
                }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
export default CustomBreadcrumb;
