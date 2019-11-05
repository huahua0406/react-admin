import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, BackTop } from 'antd';
import CustomSider from '@/layouts/CustomSider';
import CustomBreadcrumb from '@/layouts/CustomBreadcrumb';
import CustomHeader from '@/layouts/CustomHeader';
// 菜单相关路由
import menuData from '@/config/menu';
import logo from '@/assets/logo.svg';

import { renderRoutes, matchRoutes } from 'react-router-config';

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

// TODO: 更改为函数组件

class BasicLayout extends Component {
	constructor(props) {
		super(props);
		this.menuData = menuData;
	}

	render() {
		const { collapsed, location, route } = this.props;
        console.log('props: ', route);
        console.log('matchRoutes', matchRoutes(route.routes, "/home"));
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
						{/* child routes won't render without this */}
						{/* 渲染当前路由下的子路由所对应的组件，第二个参数是给子路由传入的额外自定义的参数 */}
						{renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
						{/* Content */}
					</Content>
					<Footer style={styles.footer}>{window.Config.copyright}</Footer>
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
