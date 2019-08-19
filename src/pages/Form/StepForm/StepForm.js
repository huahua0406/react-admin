import React, { Component } from 'react';
import { Card, Steps, Button, message } from 'antd';
const { Step } = Steps;
// const { Option } = Select;

// function onChange(date, dateString) {
//     console.log(date, dateString);
// }

const steps = [
    {
        title: 'First',
        content: 'First-content'
    },
    {
        title: 'Second',
        content: 'Second-content'
    },
    {
        title: 'Last',
        content: 'Last-content'
    }
];

class StepForm extends Component {
    state = {
        current: 0
    };

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <Card title="分步表单">
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => this.next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button
                            type="primary"
                            onClick={() =>
                                message.success('Processing complete!')
                            }>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{ marginLeft: 8 }}
                            onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </Card>
        );
    }
}

export default StepForm;
