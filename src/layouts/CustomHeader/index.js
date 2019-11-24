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
import { siderCollapsed } from '@/redux/actions/sider';
import screenfull from 'screenfull';

import './header.less';
const { Header } = Layout;

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
        isFullscreen: false,
        noticeList: notices || []
	};

	// 全屏事件
	toggleScreenFull = () => {
        console.log(screenfull);
		if (screenfull.isEnabled) {
            screenfull.toggle();
            screenfull.on('change', () => {
                console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
                this.setState({
                    isFullscreen: screenfull.isFullscreen
                });
            });
		}
	};

	handleMenuClick = ({ key }) => {
		if (key === 1) {
			message.info(`Click on item ${key}`);
		} else if (key === 2) {
			message.info(`Click on item ${key}`);
		} else {
			this.handleLogout();
		}
	};

	handleLogout = () => {
		this.props.history.replace('/login');
	};

	handleDeleteNotice = index => {
        const noticeList = this.state.noticeList;
        noticeList.splice(index, 1);
        this.setState({
            noticeList
        })
	};

	getNoticeMenu = () => {
        const { prefixCls } = this.props;
        const { noticeList } = this.state;
		const noticeMenu =
            noticeList.length === 0 ? (
				<div className={`${prefixCls}-noticeEmpty`}>
					你的消息通知为空
				</div>
			) : (
				noticeList.map((notice, index) => (
					<div
						key={notice.id}
						className={`${prefixCls}-noticeItem`}
						onClick={() => this.handleDeleteNotice(index)}
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
		return noticeMenu;
	};

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
	);

	render() {
		const {
			collapsed,
			toggleCollapsed,
			prefixCls,
			styles
        } = this.props;
        
        const {
			isFullscreen,
            sysName
        } = this.state;

		return (
			<Header style={styles} className={prefixCls}>
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
					<Menu.Item key="full" onClick={this.toggleScreenFull}>
						<Icon
							type={
								isFullscreen ? 'fullscreen-exit' : 'fullscreen'
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
						<Dropdown overlay={this.getUserMenu()}>
							<span className="ant-dropdown-link">
								{/* <span>{this.state.sysName}&emsp;</span> */}
								<Avatar>{sysName}</Avatar>
								<Icon type="down" />
							</span>
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

export default connect(mapState, mapDispatch)(withRouter(CustomHeader));
