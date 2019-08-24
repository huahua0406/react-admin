import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menu from '@/config/menu'; // 菜单配置
const { Sider } = Layout;
const { SubMenu } = Menu;

class CustomSider extends Component {
    state = {
        menuList: [],
        selectedKey: '',
        openKey: ''
    };
    componentDidMount() {
        const menuList = this.renderMenu(menu);
        this.setState({
            menuList
        });
        const { pathname } = this.props.history.location;
        this.setState({
            selectedKey: pathname,
            openKey: pathname.substr(0, pathname.lastIndexOf('/'))
        });
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        const { pathname } = this.props.history.location;
        this.setState({
            selectedKey: pathname,
            openKey: pathname.substr(0, pathname.lastIndexOf('/'))
        });
    }

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1]
        });
    };
    //使用递归生成菜单
    renderMenu = data => {
        return data.map(item => {
            if (item.children) {
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span className="nav-text">{item.title}</span>
                            </span>
                        }>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            } else {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            {item.icon ? <Icon type={item.icon} /> : ''}
                            <span className="nav-text">{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            }
        });
    };

    render() {
        const { collapsed } = this.props;
        const { menuList, selectedKey, openKey } = this.state;
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={200}
                className="sider fixed-sider">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={[openKey]}
                    onClick={this.menuClick}
                    onOpenChange={this.openMenu}>
                    {menuList}
                </Menu>
            </Sider>
        );
    }
}

const mapState = state => ({
    collapsed: state.sider.collapsed
});

export default connect(
    mapState,
    null
)(withRouter(CustomSider));
