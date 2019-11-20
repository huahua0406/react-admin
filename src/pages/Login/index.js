import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import Api from '@/api'
import Config from '@/config/config';
import './index.less';

/**
 * 不使用装饰器 => export default Form.create({ name: 'login' })(Login);  
 * 使用装饰器  => @Form.create()  export default Login
 */
@Form.create()
class Login extends Component {
    componentDidMount() {
        console.log('login');
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const result = await Api.login(values);
                console.log(result);
                // const { from } = this.props.location.state || { from: {pathname: '/' } }
                // https://github.com/ReactTraining/react-router/issues/4962
                // https://tylermcginnis.com/react-router-protected-routes-authentication/
                if (result.data.data.code === 0) {
                    message.info('登录成功');
                    this.props.history.replace('/');
                } else {
                    message.info('登录失败');
                }
            } else {
                message.error('请输入用户名和密码');
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h2 className="login-title">{Config.siteName}</h2>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入用户名!'
                                }
                            ],
                            initialValue: 'admin'
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="用户名"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码!'
                                }
                            ],
                            initialValue: '123456'
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type="password"
                                placeholder="密码"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
                <footer className="login-footer">{Config.copyright}</footer>
            </div>
        );
    }
}

export default Login;
