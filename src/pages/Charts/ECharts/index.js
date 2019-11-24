import React, { Component } from 'react';
import { Card } from 'antd';
import ReactEcharts from 'echarts-for-react';

// 加载全部文件
// import echarts from 'echarts';

// 按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图， 折线图是line,饼图pie,柱形图bar
import 'echarts/lib/chart/bar'; 
import 'echarts/lib/chart/line';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

class ECharts extends Component {
    componentDidMount() {
        // 主题设置：https://echarts.baidu.com/theme-builder/#acc-theme-body
        echarts.registerTheme('my_theme', {
            color: [
                "#3fb1e3",
                "#6be6c1",
                "#626c91",
                "#a0a7e6",
                "#c4ebad",
                "#96dee8"
            ],
            backgroundColor: '#f5f5f5'
        });
    }
    getOption = () => {
        let option = {
            title: {
                text: '柱状图'
            },
            tooltip: {
                //展示数据
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        };
        return option;
    };

    getOption1 = () => {
        let option = {
            title: {
                text: '折线图'
            },
            tooltip: {
                //展示数据
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        };
        return option;
    };
    render() {
        return (
            <div>
                <Card title="echarts" style={{marginBottom: 15}}>
                    <ReactEcharts
                        option={this.getOption()}
                        theme={'my_theme'}
                        notMerge={true}
                        lazyUpdate={true}
                        className='echarts-for-echarts'
                        style={{ height: 500, width: '100%' }}
                    />
                </Card>
                <Card title="echarts">
                    <ReactEcharts
                        option={this.getOption1()}
                        theme={'my_theme'}
                        notMerge={true}
                        lazyUpdate={true}
                        className='echarts-for-echarts'
                        style={{ height: 500, width: '100%'}}
                    />
                </Card>
            </div>
        );
    }
}
export default ECharts;
