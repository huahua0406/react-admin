import React, { Component } from 'react';
import {
    Card,
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake'
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men'
                    }
                ]
            }
        ]
    }
];

const styles = {
    maxWidth: '600px'
};

class BaseForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入不一致!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(
                domain => `${value}${domain}`
            );
        }
        this.setState({ autoCompleteResult });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86'
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Card title="基础表单">
                <Form
                    {...formItemLayout}
                    onSubmit={this.handleSubmit}
                    style={styles}>
                    <Form.Item label="邮箱" hasFeedback>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '请输入正确的的邮箱地址!'
                                },
                                {
                                    required: true,
                                    message: '请输入邮箱地址!'
                                }
                            ]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码!'
                                },
                                {
                                    validator: this.validateToNextPassword
                                }
                            ]
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请确认你的密码!'
                                },
                                {
                                    validator: this.compareToFirstPassword
                                }
                            ]
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item
                        label={
                            <span>
                                昵称&nbsp;
                                <Tooltip title="别人怎么称呼你?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        }>
                        {getFieldDecorator('nickname', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入昵称!',
                                    whitespace: true
                                }
                            ]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="常住地址">
                        {getFieldDecorator('residence', {
                            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                            rules: [
                                {
                                    type: 'array',
                                    required: true,
                                    message:
                                        '请选择你的常住地址!'
                                }
                            ]
                        })(<Cascader options={residences} />)}
                    </Form.Item>
                    <Form.Item label="手机号码">
                        {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入你的手机号码!'
                                }
                            ]
                        })(
                            <Input
                                addonBefore={prefixSelector}
                                style={{ width: '100%' }}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="网址">
                        {getFieldDecorator('website', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入你的网址!'
                                }
                            ]
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onChange={this.handleWebsiteChange}
                                placeholder="网址">
                                <Input />
                            </AutoComplete>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="验证码"
                        extra="我们必须确认你不是机器人.">
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                '请输入你获取的验证码!'
                                        }
                                    ]
                                })(<Input />)}
                            </Col>
                            <Col span={12}>
                                <Button>获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked'
                        })(
                            <Checkbox>
                                我已经阅读过 <a href="">协议</a>
                            </Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            注  册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default Form.create({ name: 'register' })(BaseForm);
