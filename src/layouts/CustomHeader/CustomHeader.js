import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Icon, Badge, Menu, Dropdown, message } from 'antd';
const { Header } = Layout;
import { siderCollapsed } from '@/redux/actions/sider';
import { judgeIsSupportFull, fullScreen, fullExit } from '@/utils/screenfull';

import './header.less';

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
        console.log(this.state.isScreenFull)
        this.state.isScreenFull ? fullExit() : fullScreen();
    };

    handleMenuClick = ({ key }) => {
        if (key == 1) {
            message.info(`Click on item ${key}`);
        } else if (key == 2) {
            message.info(`Click on item ${key}`);
        } else {
            this.logout();
        }
    };

    logout = () => {
        this.props.history.replace('/login');
    };

    goTabs = () => {
        this.props.history.push('/ui/tabs');
    };

    render() {
        const { collapsed, toggleCollapsed, isScreenFull } = this.props;
        return (
            <Header
                style={{ background: '#fff', padding: 0 }}
                className="header">
                <Icon
                    className="trigger"
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
                    <Menu.Item key="notice" onClick={this.goTabs}>
                        <Badge dot>
                            <Icon type="bell" />
                        </Badge>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Dropdown
                            overlay={() => (
                                <Menu onClick={this.handleMenuClick}>
                                    <Menu.Item key="1">个人资料</Menu.Item>
                                    <Menu.Item key="2">系统设置</Menu.Item>
                                    <Menu.Divider />
                                    <Menu.Item key="3">退出登录</Menu.Item>
                                </Menu>
                            )}>
                            <a className="ant-dropdown-link">
                                你好，{this.state.sysName}&emsp;
                                <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

// mapStateToProps：将state映射到组件的props中
const mapState = state => ({
    collapsed: state.sider.collapsed
});

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatch = dispatch => ({
    toggleCollapsed() {
        dispatch(siderCollapsed());
    }
});

export default connect(
    mapState,
    mapDispatch
)(withRouter(CustomHeader));
