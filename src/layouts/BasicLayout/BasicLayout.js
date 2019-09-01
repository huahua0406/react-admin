import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, BackTop } from 'antd';
import CustomSider from '@/layouts/CustomSider/CustomSider';
import CustomBreadcrumb from '@/layouts/CustomBreadcrumb/CustomBreadcrumb';
import CustomHeader from '@/layouts/CustomHeader/CustomHeader';
import Routes from '@/routes'; // 路由配置

const { Content, Footer } = Layout;

import menuData from '@/config/menu';
import logo from '@/assets/logo.svg';

const styles = {
    content: {
        margin: '0 24px',
        padding: 24,
        background: '#fff'
    },
    footer: {
        textAlign: 'center'
    }
};

class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.menuData = menuData;
    }

    render() {
        const { collapsed, location } = this.props;
        return (
            <Layout className="basicLayout">
                <CustomSider
                    appBaseUrl="/"
                    appName="React-Admin"
                    prefixCls="custom-sider"
                    appLogo={logo}
                    menuData={this.menuData}
                    pathname={location.pathname}
                />
                <Layout
                    style={{
                        minHeight: '100vh',
                        paddingLeft: collapsed ? '80px' : '256px'
                    }}>
                    <CustomHeader />
                    <CustomBreadcrumb />
                    <Content style={styles.content}>
                        {/* Content */}
                        <Routes />
                        {/* Content */}
                    </Content>
                    <Footer style={styles.footer}>{Config.copyright}</Footer>
                    <BackTop />
                </Layout>
            </Layout>
        );
    }
}

const mapState = state => ({
    collapsed: state.sider.collapsed
});

// TODO:PropTypes

export default connect(
    mapState,
    null
)(BasicLayout);
