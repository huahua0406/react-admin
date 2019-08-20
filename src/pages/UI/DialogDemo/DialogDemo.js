import React, { Component } from 'react';
import { Card, Modal, Button } from 'antd';

const cardStyles = {
    marginBottom: 20
};

class DialogDemo extends Component {
    state = {
        visible: false,
        visible1: false,
        confirmLoading: false,
        ModalText: 'Content of the modal'
    };
    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    showAsyncModal = () => {
        this.setState({
            visible1: true
        });
    };
    handleOk1 = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true
        });
        setTimeout(() => {
            this.setState({
                visible1: false,
                confirmLoading: false
            });
        }, 2000);
    };

    handleCancel1 = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible1: false
        });
    };
    render() {
        const { visible1, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Card title="基础模态框" style={cardStyles}>
                    <Button type="primary" onClick={this.showModal}>
                        基本用法
                    </Button>
                    &emsp;
                    <Button type="primary" onClick={this.showAsyncModal}>
                        异步关闭
                    </Button>
                    <Modal
                        title="基础用法"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <p>{ModalText}</p>
                    </Modal>
                    <Modal
                        title="异步关闭"
                        visible={visible1}
                        onOk={this.handleOk1}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel1}>
                        <p>{ModalText}</p>
                    </Modal>
                </Card>
            </div>
        );
    }
}

export default DialogDemo;
