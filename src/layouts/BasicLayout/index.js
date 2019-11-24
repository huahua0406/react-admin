import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, BackTop } from 'antd';
import CustomSider from '@/layouts/CustomSider';
import CustomBreadcrumb from '@/layouts/CustomBreadcrumb';
import CustomHeader from '@/layouts/CustomHeader';
import ContentMain from '@/layouts/ContentMain';

// 菜单相关路由
import menuData from '@/config/menu';
import logo from '@/assets/logo.svg';

import Config from '@/config/config';

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
	state = {
		menuData
	};

	render() {
		const { menuData } = this.state;
		const { collapsed, location } = this.props;
		return (
			<Layout className="basicLayout">
				<CustomSider
					appBaseUrl="/"
					appName="React-Admin"
					prefixCls="custom-sider"
					appLogo={logo}
					menuData={menuData}
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
						{/* Content Main */}
						<ContentMain />
						{/* Content Main */}
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

BasicLayout.propTypes = {
	collapsed: PropTypes.bool
};

export default withRouter(connect(mapState, null)(BasicLayout));
