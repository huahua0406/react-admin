import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import styles from './login.module.less';

// @Form.create()
class Login extends Component {
    componentDidMount() {
        console.log(Config.apiPrefix);
        console.log(Api);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const result = await Api.login(values);
                console.log(result);
                if (result.data.data.code == 0) {
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
            <div className={styles['login-wrapper']}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h2 className={styles.title}>{Config.siteName}</h2>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <footer className="login-footer">footer</footer>
            </div>
        );
    }
}
// 不使用装饰器 => Form.create()(FormLogin);
// 使用装饰器  => @Form.create()

export default Form.create({ name: 'login' })(Login);
