import React, { Component } from 'react';
import { connect } from 'react-redux';
import { siderCollapsed } from '../../redux/actions/sider';

import { Layout, Icon, Avatar, Badge, Menu, Dropdown } from 'antd';
const { Header } = Layout;

const styles = {
    avatar: {
        marginLeft: '24px'
    },
    menu:{
        marginLeft: '36px'
    }
};

const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);


class CustomHeader extends Component {
    
    state = {
        sysName: 'admin'
    };

    render() {
        const { collapsed, toggleCollapsed } = this.props;
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggleCollapsed}
                />
                <div
                    style={{
                        lineHeight: '64px',
                        float: 'right',
                        padding: '0 24px',
                        fontSize: 16
                    }}>
                    <Icon type="github" /> 
                    <Icon type="shrink" />
                    <Badge count={100}>
                        <Icon type="notification" style={{width:'48px'}} />
                    </Badge>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#" style={styles.menu}>
                            你好，admin<Icon type="down" />
                        </a>
                    </Dropdown>
                    <Avatar size="large" style={styles.avatar}>
                        {this.state.sysName}
                    </Avatar>
                </div>
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

export default connect(mapState,mapDispatch)(CustomHeader);
