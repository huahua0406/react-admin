import React, { Component } from 'react';
import { Icon } from 'antd';
import styles from './error.module.less';

class NotFound extends Component {
    render() {
        return (
            <div className={styles.error}>
                <Icon type="frown-o" />
                <h1>404 Not Found</h1>
            </div>
        );
    }
}

export default NotFound;
