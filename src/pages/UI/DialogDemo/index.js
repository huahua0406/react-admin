import React, { Component } from 'react';
import { Card, Modal, Button } from 'antd';

// const { confirm } = Modal;

const cardStyles = {
    marginBottom: 20
};

class DialogDemo extends Component {
    state = {
        visible: false,

        visible1: false,
        confirmLoading: false,

        visible2: false,
        loading: false,
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

    showModal2 = () => {
        this.setState({
          visible2: true,
        });
    };

    handleOk2 = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible2: false });
        }, 3000);
      };
    
    handleCancel2 = () => {
        this.setState({ visible2: false });
    };

    info = () => {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
          onOk() {},
        });
    }

    success = () => {
        Modal.success({
          title: 'This is a success message',
          content: 'some messages...some messages...',
        });
    }

    error = () => {
        Modal.error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
    }

    warning = () => {
        Modal.warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
    }
      
    render() {
        const {confirmLoading } = this.state;
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
                    &emsp;
                    <Button type="primary" onClick={this.showModal2}>
                        自定义页脚
                    </Button>
                    <Modal
                        title="基础用法"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}>
                        <p>我是基本dialog</p>
                    </Modal>
                    <Modal
                        title="异步关闭"
                        visible={this.state.visible1}
                        onOk={this.handleOk1}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel1}>
                        <p>我是异步关闭dialog</p>
                    </Modal>
                    <Modal
                        visible={this.state.visible2}
                        title="自定义页脚"
                        onOk={this.handleOk2}
                        onCancel={this.handleCancel2}
                        footer={[
                            <Button key="back" onClick={this.handleCancel2}>
                                Return
                            </Button>,
                            <Button
                                key="submit"
                                type="primary"
                                loading={this.state.loading}
                                onClick={this.handleOk1}>
                                Submit
                            </Button>
                        ]}>
                        <p>我是自定义页脚dialog</p>
                    </Modal>
                </Card>

                <Card title="确认对话框">
                    <Button type="primary" onClick={this.info}>
                        Info
                    </Button>
                    &emsp;
                    <Button type="primary" onClick={this.success}>
                        Success
                    </Button>
                    &emsp;
                    <Button type="primary" onClick={this.error}>
                        Error
                    </Button>
                    &emsp;
                    <Button type="primary" onClick={this.warning}>
                        Warning
                    </Button>
                </Card>
            </div>
        );
    }
}

export default DialogDemo;
