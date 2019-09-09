import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import memoize from 'memoize-one';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

import { getFlatMenuKeys, urlToList, getMeunMatchKeys } from '@/utils/util';

import './sider.less';

class CustomSider extends Component {
    constructor(props) {
        super(props);
        // https://www.jianshu.com/p/b123bbe0330c
        this.selectedKeys = memoize((pathname, menuData) => {
            return getMeunMatchKeys(
                getFlatMenuKeys(menuData),
                urlToList(pathname)
            );
        });

        const { pathname, menuData } = props;
        console.log(this.selectedKeys(pathname, menuData));
        this.state = {
            openKeys: this.selectedKeys(pathname, menuData)
        };
    }

    handleOpenChange = openKeys => {
        console.log(openKeys);
        this.setState({
            openKeys
        });
    };
    //使用递归生成菜单
    renderMenu = menuData => {
        return menuData.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {item.icon && <Icon type={item.icon} />}
                                <span>{item.name}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            {item.icon && <Icon type={item.icon} />}
                            <span>{item.name}</span>
                        </Link>
                    </Menu.Item>
                );
            }
        });
    };

    renderSiderHeader = () => {
        const {
            collapsed,
            appBaseUrl,
            prefixCls,
            appLogo,
            appName
        } = this.props;

        if (!collapsed) {
            return (
                <Link to={appBaseUrl}>
                    <div className={`${prefixCls}-header`}>
                        <img
                            className={`${prefixCls}-appLogo`}
                            src={appLogo}
                            alt="logo"
                        />
                        <div className={`${prefixCls}-appName`}>{appName}</div>
                    </div>
                </Link>
            );
        } else {
            return (
                <Link to={appBaseUrl}>
                    <div className={`${prefixCls}-header`}>
                        <img
                            className={`${prefixCls}-appLogo`}
                            src={appLogo}
                            alt="logo"
                        />
                    </div>
                </Link>
            );
        }
    };

    renderSiderBody = () => {
        const { prefixCls, pathname, menuData } = this.props;
        const { openKeys } = this.state;

        return (
            <div className={`${prefixCls}-body`}>
                <Menu
                    style={{ padding: '16px 0', width: '100%' }}
                    mode="inline"
                    theme="dark"
                    openKeys={openKeys}
                    selectedKeys={this.selectedKeys(pathname, menuData)}
                    onOpenChange={this.handleOpenChange}>
                    {this.renderMenu(menuData)}
                </Menu>
            </div>
        );
    };

    render() {
        const { collapsed, prefixCls, className, style, width } = this.props;
        const classes = `${prefixCls} ${className}`;
        const styles = {
            ...style,
            width
        };
        return (
            <Sider
                trigger={null}
                collapsed={collapsed}
                className={classes}
                style={styles}
                width={width}>
                {this.renderSiderHeader()}
                {this.renderSiderBody()}
            </Sider>
        );
    }
}

const mapState = state => ({
    collapsed: state.sider.collapsed
});

const propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    appName: PropTypes.string,
    appLogo: PropTypes.string,
    appBaseUrl: PropTypes.string,
    width: PropTypes.number,
    menuData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string,
            icon: PropTypes.string,
            children: PropTypes.array
        })
    ),
    pathname: PropTypes.string
};

const defaultProps = {
    prefixCls: 'custom-sider',
    className: 'fixed-sider',
    style: {},
    appName: '',
    appLogo: '',
    appBaseUrl: '/',
    width: 256,
    menuData: [],
    pathname: '/'
};

CustomSider.propTypes = propTypes;
CustomSider.defaultProps = defaultProps;

export default connect(
    mapState,
    null
)(withRouter(CustomSider));
