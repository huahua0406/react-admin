import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentStep, setStepInfo } from '@/redux/actions/stepform';
import './step.less';

import {
    Card,
    Steps,
    Button,
    Form,
    Input,
    Divider,
    Select,
    message,
    Icon,
    Alert
} from 'antd';
const { Step } = Steps;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 19
    }
};
const tailFormItemLayout = {
    wrapperCol: {
        offset: 5
    }
};

const styles = {
    steps: {
        maxWidth: 750,
        margin: '16px auto'
    },
    desc: {
        padding: '0 56px'
    }
};

@connect(
    state => ({
        current: state.stepform.current,
        data: state.stepform.data
    }),
    { setCurrentStep, setStepInfo }
)
@Form.create()
class Step1 extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    next() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.setStepInfo(values);
                this.props.setCurrentStep(1);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="stepForm" id="step1">
                <Form.Item
                    style={{ marginTop: 20 }}
                    {...formItemLayout}
                    label="付款账户">
                    {getFieldDecorator('payAccount', {
                        initialValue: 'ant-design@alipay.com',
                        rules: [{ required: true, message: '请选择付款账户' }]
                    })(
                        <Select placeholder="test@example.com">
                            <Option value="ant-design@alipay.com">
                                ant-design@alipay.com
                            </Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收款账户">
                    <Input.Group compact>
                        <Select defaultValue="alipay" style={{ width: 100 }}>
                            <Option value="alipay">支付宝</Option>
                            <Option value="bank">银行账户</Option>
                        </Select>
                        {getFieldDecorator('receiverAccount', {
                            initialValue: 'test@example.com',
                            rules: [
                                { required: true, message: '请输入收款人账户' },
                                { type: 'email', message: '账户名应为邮箱格式' }
                            ]
                        })(<Input style={{ width: 'calc(100% - 100px)' }} />)}
                    </Input.Group>
                </Form.Item>
                <Form.Item {...formItemLayout} label="收款人姓名">
                    {getFieldDecorator('receiverName', {
                        rules: [
                            {
                                required: true,
                                message: '不能为空'
                            },
                            {
                                whitespace: false,
                                message: '禁止使用空格'
                            }
                        ],
                        initialValue: 'Alex'
                    })(<Input placeholder="请输入收款人姓名" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="转账金额">
                    {getFieldDecorator('amount', {
                        rules: [
                            {
                                required: true,
                                message: '不能为空'
                            },
                            {
                                pattern: /^\d*$/,
                                message: '请输入合法的金额'
                            }
                        ],
                        initialValue: 500
                    })(<Input prefix="¥" placeholder="请输入金额" />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" onClick={() => this.next()}>
                        下一步
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

@connect(
    state => ({
        current: state.stepform.current,
        data: state.stepform.data
    }),
    { setCurrentStep, setStepInfo }
)
@Form.create()
class Step2 extends Component {
    state = {
        loading: false
    };
    prev() {
        this.props.setCurrentStep(0);
    }
    next() {
        this.props.setCurrentStep(2);
    }

    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                });
                setTimeout(() => {
                    this.setState({
                        loading: false
                    });
                    this.props.setCurrentStep(2);
                }, 2000);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { data } = this.props;
        return (
            <Form className="stepForm" id="step2">
                <Form.Item style={{ marginTop: 20 }} {...formItemLayout}>
                    <Alert
                        closable
                        showIcon
                        type="info"
                        message="确认转账后，资金将直接打入对方账户，无法退回。"
                    />
                </Form.Item>
                <Form.Item {...formItemLayout} label="付款账户">
                    {data.payAccount}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收款账户">
                    {data.receiverAccount}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收款人姓名">
                    {data.receiverName}
                </Form.Item>
                <Form.Item {...formItemLayout} label="转账金额">
                    <span>{data.amount}元</span>
                    {/* <span>五百元人民币整</span> */}
                </Form.Item>
                <Divider />
                <Form.Item
                    {...formItemLayout}
                    label="支付密码"
                    required={false}>
                    {getFieldDecorator('password', {
                        initialValue: '123456',
                        rules: [
                            {
                                required: true,
                                message: '需要支付密码才能进行支付'
                            }
                        ]
                    })(
                        <Input
                            type="password"
                            autoComplete="off"
                            style={{ width: '80%' }}
                        />
                    )}
                </Form.Item>
                <Form.Item style={{ marginBottom: 8 }} {...tailFormItemLayout}>
                    <Button
                        type="primary"
                        onClick={this.handleSubmit}
                        loading={this.state.loading}>
                        提交
                    </Button>
                    <Button
                        onClick={() => this.prev()}
                        style={{ marginLeft: 8 }}>
                        上一步
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

@connect(
    state => ({
        current: state.stepform.current,
        data: state.stepform.data
    }),
    { setCurrentStep, setStepInfo }
)
@Form.create()
class Step3 extends React.Component {
    render() {
        const { data, setCurrentStep } = this.props;
        return (
            <div id="step3">
                <div>
                    <div className="icon-box">
                        <Icon type="info-circle" />
                    </div>
                    <div>
                        <h3 className="success">操作成功</h3>
                        <p className="success-desc">预计两小时内到账</p>
                    </div>
                    <Form className="result">
                        <Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                className="setFormText"
                                label="付款账户">
                                {data.payAccount}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                style={{ marginBottom: 18 }}
                                label="收款账户">
                                {data.receiverAccount}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                className="setFormText"
                                label="收款人姓名">
                                {data.receiverName}
                            </Form.Item>
                            <Form.Item
                                {...formItemLayout}
                                className="setFormText"
                                label="转账金额">
                                <span className="money">{data.amount}</span>元
                            </Form.Item>
                        </Form.Item>
                    </Form>
                    <div>
                        <Button
                            type="primary"
                            onClick={() => setCurrentStep(0)}>
                            再转一笔
                        </Button>
                        <Button style={{ marginLeft: 8 }}>查看账单</Button>
                    </div>
                </div>
            </div>
        );
    }
}

class StepForm extends Component {
    getTitle = value => {
        return (
            {
                0: '填写转账信息',
                1: '确认转账信息',
                2: '完成'
            }[value] || value
        );
    };

    getStepContent = value => {
        switch (value) {
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            default:
                return <Step1 />;
        }
    };
    render() {
        const { current } = this.props;
        return (
            <Card title="分步表单">
                <Steps current={current} style={styles.steps}>
                    <Step title="填写转账信息" />
                    <Step title="确认转账信息" />
                    <Step title="完成" />
                </Steps>
                <div className="steps-content">
                    {this.getStepContent(current)}
                </div>
            </Card>
        );
    }
}

const mapState = state => ({
    current: state.stepform.current,
    data: state.stepform.data
});

const mapDispatch = dispatch => ({
    setCurrentStep() {
        dispatch(setCurrentStep());
    }
});

export default connect(
    mapState,
    mapDispatch
)(StepForm);
