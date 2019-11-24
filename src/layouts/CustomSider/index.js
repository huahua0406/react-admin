import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './sider.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class CustomSider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: ['/home'],
            openKeys: [],
            rootSubmenuKeys: [] // submenu keys of first level
        }
    }
    // 处理 pathname 获取openKeys 
    // TODO:可以优化
    getOpenKeys = url => {
        let newStr = '',
            newArr = [],
            arr = url.split('/').map(i => `/${i}`)
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i]
            newArr.push(newStr)
        }
        return newArr
    }

    

    // 页面刷新的时候可以定位到 menu 显示
    componentDidMount() {
        const { menuData } = this.props;
        const { pathname } = this.props.location;
        const rootSubmenuKeys = menuData.filter(item => item.key&&item.children).map(item => item.key)

        // console.log(this.getOpenKeys(pathname), /vv/);

        // 设置菜单的默认值
        this.setState({
            rootSubmenuKeys,
            selectedKeys: [pathname],
            openKeys: this.getOpenKeys(pathname)
        })
        
    };

    // 点击面包屑导航时 侧边栏同步响应
    componentDidUpdate(prevProps, prevState) {
        let { pathname } = this.props.location
        if (prevProps.location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname],
                openKeys: this.getOpenKeys(pathname)
            })
        }
    }

    // 只展开一个 SubMenu
    handleOpenChange = openKeys => {
        console.log(openKeys, /openkey/);
        // 最新展开的 SubMenu
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        console.log(latestOpenKey, /lastest/);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
            });
        }
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

    // LOGO
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
        const { prefixCls, menuData } = this.props;
        const { openKeys, selectedKeys } = this.state;

        return (
            <div className={`${prefixCls}-body`}>
                <Menu
                    style={{ padding: '16px 0', width: '100%' }}
                    subMenuOpenDelay={0.3}
                    theme="dark"
                    mode="inline"
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
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
