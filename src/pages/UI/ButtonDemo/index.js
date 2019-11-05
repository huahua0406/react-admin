import React, { Component } from 'react';
import { Button, Radio, Icon, Card } from 'antd';
const ButtonGroup = Button.Group;

const cardStyles = {
    marginBottom: 20
};

class ButtonDemo extends Component {
    state = {
        loading: false,
        iconLoading: false,
        size: 'large'
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };
    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };
    render() {
        const { size } = this.state;
        return (
            <div>
                <Card title="基础按钮" style={cardStyles}>
                    <Button type="primary">Primary</Button>&emsp;
                    <Button>Default</Button>&emsp;
                    <Button disabled>Disabled</Button>&emsp;
                    <Button type="dashed">Dashed</Button>&emsp;
                    <Button type="danger">Danger</Button>&emsp;
                    <Button type="link">Link</Button>&emsp;
                </Card>
                <Card title="图标按钮" style={cardStyles}>
                    <Button icon="plus">创建</Button>&emsp;
                    <Button icon="edit">编辑</Button>&emsp;
                    <Button icon="delete">删除</Button>&emsp;
                    <Button type="primary" shape="circle" icon="search" />
                    &emsp;
                    <Button type="primary" icon="search">
                        搜索
                    </Button>
                    &emsp;
                    <Button type="primary" icon="download">
                        下载
                    </Button>
                    &emsp;
                </Card>
                <Card title="loading按钮" style={cardStyles}>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    &emsp;
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    &emsp;
                    <Button
                        type="primary"
                        loading={this.state.loading}
                        onClick={this.enterLoading}>
                        Click me!
                    </Button>
                    &emsp;
                    <Button
                        type="primary"
                        icon="poweroff"
                        loading={this.state.iconLoading}
                        onClick={this.enterIconLoading}>
                        Click me!
                    </Button>
                    &emsp;
                    <Button shape="circle" loading />
                    &emsp;
                    <Button type="primary" shape="circle" loading />
                </Card>
                <Card title="按钮组" style={cardStyles}>
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮大小" style={cardStyles}>
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                    <br/>
                    <br/>
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    &emsp;
                    <Button size={size}>Normal</Button>
                    &emsp;
                    <Button type="dashed" size={size}>
                        Dashed
                    </Button>
                    &emsp;
                    <Button type="danger" size={size}>
                        Danger
                    </Button>
                    &emsp;
                    <Button type="link" size={size}>
                        Link
                    </Button>
                </Card>
            </div>
        );
    }
}

export default ButtonDemo;
