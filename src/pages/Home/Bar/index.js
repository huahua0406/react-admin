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

const data = [
    {
        week: '星期一',
        times: 38
    },
    {
        week: '星期二',
        times: 52
    },
    {
        week: '星期三',
        times: 61
    },
    {
        week: '星期四',
        times: 145
    },
    {
        week: '星期五',
        times: 48
    },
    {
        week: '星期六',
        times: 38
    },
    {
        week: '星期日',
        times: 38
    }
];

const scale = {
    week: { alias: '星期' },
    times: { alias: '访问量', tickInterval: 20 }
};

class Line extends Component {
    render() {
        return (
            <Chart height={400} data={data} scale={scale} forceFit>
                <Axis name="week" />
                <Axis title name="times" />
                <Tooltip crosshairs={{ type: 'rect' }} />
                <Geom type="interval" position="week*times" />
            </Chart>
        );
    }
}
export default Line;
