import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, BackTop } from 'antd';
import CustomSider from '@/layouts/CustomSider/CustomSider';
import CustomBreadcrumb from '@/layouts/CustomBreadcrumb/CustomBreadcrumb';
import CustomHeader from '@/layouts/CustomHeader/CustomHeader';
import Routes from '@/routes'; // 路由配置

const { Content, Footer } = Layout;

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
    render() {
        const { collapsed } = this.props;
        return (
            <Layout className="basicLayout">
                <CustomSider />
                <Layout
                    style={{
                        minHeight: '100vh',
                        paddingLeft: collapsed ? '80px' : '200px'
                    }}>
                    <CustomHeader />
                    <CustomBreadcrumb />
                    <Content style={styles.content}>
                        {/* Content */}
                        <Routes />
                        {/* Content */}
                    </Content>
                    <Footer style={styles.footer}>
                        {global.Config.copyright}
                    </Footer>
                    <BackTop />
                </Layout>
            </Layout>
        );
    }
}

const mapState = state => ({
    collapsed: state.sider.collapsed
});

export default connect(
    mapState,
    null
)(BasicLayout);
