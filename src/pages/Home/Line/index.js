import React, { Component } from 'react';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from 'bizcharts';

// 数据源
const data = [
    {
        week: '星期一',
        value: 3
    },
    {
        week: '星期二',
        value: 4
    },
    {
        week: '星期三',
        value: 3.5
    },
    {
        week: '星期四',
        value: 5
    },
    {
        week: '星期五',
        value: 4.9
    },
    {
        week: '星期六',
        value: 6
    },
    {
        week: '星期日',
        value: 7
    }
];
// 定义度量
const cols = {
    value: {
        min: 0,
        alias: '新增访问'
    },
    week: {
        range: [0, 1],
        alias: '星期'
    }
};

class Line extends Component {
    render() {
        return (
            <Chart height={400} data={data} scale={cols} forceFit>
                <Axis name="week" />
                <Axis title name="value" />
                <Tooltip
                    crosshairs={{
                        type: 'y'
                    }}
                />
                <Geom type="line" position="week*value" size={2} />
                <Geom
                    type="point"
                    position="week*value"
                    size={4}
                    shape={'circle'}
                    style={{
                        stroke: '#fff',
                        lineWidth: 1
                    }}
                />
            </Chart>
        );
    }
}
export default Line;
