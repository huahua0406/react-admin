import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Layout,
    Icon,
    Badge,
    Menu,
    Dropdown,
    Avatar,
    Popover,
    message
} from 'antd';
const { Header } = Layout;
import { siderCollapsed } from '@/redux/actions/sider';
import { judgeIsSupportFull, fullScreen, fullExit } from '@/utils/screenfull';

import './header.less';

const notices = [
    {
        id: 0,
        title: 'Task A',
        message: 'Task needs to be done before 2020.08.20'
    },
    {
        id: 1,
        title: 'Task B',
        message: 'Task needs to be done before 2020.08.20'
    },
    {
        id: 2,
        title: 'Task C',
        message: 'Task needs to be done before 2020.08.20'
    }
];

class CustomHeader extends Component {
    state = {
        sysName: 'admin',
        isSupportFull: false,
        isScreenFull: false
    };

    componentDidMount() {
        window.addEventListener('resize', this.checkFullStatus);
        this.judgeIsSupportFull();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.checkFullStatus);
    }

    // 判断当前浏览器是否支持全屏API
    judgeIsSupportFull = () => {
        let isSupportFull = judgeIsSupportFull();
        this.setState({ isSupportFull });
    };
    // 计算当前是否处于全屏
    checkFullStatus = () => {
        // 判断网页的高度或者宽度是否等于屏幕对应大小
        // true: 当前处于全屏状态
        // false: 当前不处于全屏状态
        if (
            document.body.scrollHeight === window.screen.height &&
            document.body.scrollWidth === window.screen.width
        ) {
            this.setState({ isScreenFull: true });
        } else {
            this.setState({ isScreenFull: false });
        }
    };

    // 全屏事件
    handleScreenFull = () => {
        console.log(this.state.isScreenFull);
        this.state.isScreenFull ? fullExit() : fullScreen();
    };

    handleMenuClick = ({ key }) => {
        if (key == 1) {
            message.info(`Click on item ${key}`);
        } else if (key == 2) {
            message.info(`Click on item ${key}`);
        } else {
            this.handleLogout();
        }
    };

    handleLogout = () => {
        this.props.history.replace('/login');
    };

    deleteNotice = id => {
        console.log(id);
    };

    getNoticeMenu = () => {
        const { prefixCls }  = this.props;
        const noticeMenu =  notices.length === 0 ? (
            <div className={`${prefixCls}-noticeEmpty`}>
                你的消息通知为空
            </div>
        ) : (
            notices.map(notice => (
                <div
                    key={notice.id}
                    className={`${prefixCls}-noticeItem`}
                    onClick={() => this.deleteNotice(notice.id)}
                    role="presentation">
                    <div className={`${prefixCls}-noticeTitle`}>
                        {notice.title}
                    </div>
                    <div className={`${prefixCls}-noticeMessage`}>
                        {notice.message}
                    </div>
                </div>
            ))
        );
        return noticeMenu
    }

    getUserMenu = () => (
        <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1" disabled>
                <Icon type="user" />
                <span>个人资料</span>
            </Menu.Item>
            <Menu.Item key="2" disabled>
                <Icon type="setting" />
                <span>系统设置</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Icon type="logout" />
                <span>退出登录</span>
            </Menu.Item>
        </Menu>
    )

    render() {
        const {
            collapsed,
            toggleCollapsed,
            isScreenFull,
            prefixCls,
            styles
        } = this.props;
            

        return (
            <Header
                style={styles}
                className={prefixCls}>
                <Icon
                    className={`${prefixCls}-trigger`}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggleCollapsed}
                />
                <Menu
                    mode="horizontal"
                    style={{
                        lineHeight: '64px',
                        float: 'right'
                    }}>
                    <Menu.Item key="github">
                        <a
                            href="https://github.com/huahua0406/react-admin"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Icon type="github" />
                        </a>
                    </Menu.Item>
                    <Menu.Item key="full" onClick={this.handleScreenFull}>
                        <Icon
                            type={
                                isScreenFull ? 'fullscreen-exit' : 'fullscreen'
                            }
                        />
                    </Menu.Item>
                    <Menu.Item key="notice">
                        <Popover
                            placement="bottomRight"
                            arrowPointAtCenter
                            trigger="hover"
                            title="消息通知"
                            content={this.getNoticeMenu()}>
                            <Badge dot>
                                <Icon type="bell" />
                            </Badge>
                        </Popover>
                    </Menu.Item>
                    <Menu.Item key="user">
                        {/* overlay ===> menu||() => menu */}
                        <Dropdown
                            overlay={this.getUserMenu()}>
                            <a className="ant-dropdown-link">
                                {/* <span>{this.state.sysName}&emsp;</span> */}
                                <Avatar>{this.state.sysName}</Avatar>
                                <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

const mapState = state => ({
    collapsed: state.sider.collapsed
});

const mapDispatch = dispatch => ({
    toggleCollapsed() {
        dispatch(siderCollapsed());
    }
});

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    styles: PropTypes.object
};

const defaultProps = {
    prefixCls: 'custom-header',
    className: '', //todo: fixed-header
    styles: { background: '#fff', padding: 0 }
};

CustomHeader.propTypes = propTypes;
CustomHeader.defaultProps = defaultProps;

export default connect(
    mapState,
    mapDispatch
)(withRouter(CustomHeader));
