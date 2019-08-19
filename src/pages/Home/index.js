import React, { Component } from 'react';
import { Card, Icon } from 'antd';

import CountUp from 'react-countup';

import './index.less';

class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="card-list">
                    <Card className="card-item">
                        <div className="card-wrap">
                            <Icon type="user" className="icon-user" />
                            <div className="card-right-con">
                                <CountUp end={1123} />
                                <h3>用户量</h3>
                            </div>
                        </div>
                    </Card>
                    <Card className="card-item">
                        <div className="card-wrap">
                            <Icon type="user-add" className="icon-user-add" />
                            <div className="card-right-con">
                                <CountUp end={456} />
                                <h3>新增用户</h3>
                            </div>
                        </div>
                    </Card>
                    <Card className="card-item">
                        <div className="card-wrap">
                            <Icon type="user-delete" className="icon-user-delete" />
                            <div className="card-right-con">
                                <CountUp end={99} />
                                <h3>减少用户</h3>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;
