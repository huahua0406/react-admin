import React, { Component } from 'react';
import { Card, Icon, Row, Col } from 'antd';
import CountUp from 'react-countup';
import Bar from './Bar';
import Line from './Line';
import './index.less';

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <Row gutter={16} style={{marginBottom:35}}>
                    <Col span={8}>
                        <Card className="card-item">
                            <div className="card-wrap">
                                <Icon type="user" className="icon-user" />
                                <div className="card-right-con">
                                    <CountUp end={1234} />
                                    <h3>用户量</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-item">
                            <div className="card-wrap">
                                <Icon
                                    type="user-add"
                                    className="icon-user-add"
                                />
                                <div className="card-right-con">
                                    <CountUp end={456} />
                                    <h3>新增用户</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="card-item">
                            <div className="card-wrap">
                                <Icon
                                    type="user-delete"
                                    className="icon-user-delete"
                                />
                                <div className="card-right-con">
                                    <CountUp end={789} />
                                    <h3>减少用户</h3>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Bar />
                    </Col>
                    <Col span={12}>
                        <Line />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
