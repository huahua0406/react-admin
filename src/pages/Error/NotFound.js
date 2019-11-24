import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';

class NotFound extends Component {
    render() {
        return (
            <div className="error">
                <Icon type="frown-o" />
                <h1>404 Not Found</h1>
            </div>
        );
    }
}

export default NotFound;
