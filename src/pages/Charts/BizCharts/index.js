import React, { Component } from 'react';
import { Card } from 'antd';
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

class BizCharts extends Component {
    render() {
        const data = [
            {
                year: '1951 年',
                sales: 38
            },
            {
                year: '1952 年',
                sales: 52
            },
            {
                year: '1956 年',
                sales: 61
            },
            {
                year: '1957 年',
                sales: 145
            },
            {
                year: '1958 年',
                sales: 48
            },
            {
                year: '1959 年',
                sales: 38
            },
            {
                year: '1960 年',
                sales: 38
            },
            {
                year: '1962 年',
                sales: 38
            }
        ];
        const cols = {
            sales: {
                tickInterval: 20
            }
        };

        const data1 = [
            {
                year: '1991',
                value: 3
            },
            {
                year: '1992',
                value: 4
            },
            {
                year: '1993',
                value: 3.5
            },
            {
                year: '1994',
                value: 5
            },
            {
                year: '1995',
                value: 4.9
            },
            {
                year: '1996',
                value: 6
            },
            {
                year: '1997',
                value: 7
            },
            {
                year: '1998',
                value: 9
            },
            {
                year: '1999',
                value: 13
            }
        ];
        const cols1 = {
            value: {
                min: 0
            },
            year: {
                range: [0, 1]
            }
        };

        return (
            <div>
                <Card title="柱状图" style={{marginBottom: 15}}>
                    <Chart height={400} data={data} scale={cols} forceFit>
                        <Axis name="year" />
                        <Axis name="sales" />
                        <Tooltip
                            crosshairs={{
                                type: 'y'
                            }}
                        />
                        <Geom type="interval" position="year*sales" />
                    </Chart>
                </Card>
                <Card title="折线图">
                    <Chart height={400} data={data1} scale={cols1} forceFit>
                        <Axis name="year" />
                        <Axis name="value" />
                        <Tooltip
                            crosshairs={{
                                type: 'y'
                            }}
                        />
                        <Geom type="line" position="year*value" size={2} />
                        <Geom
                            type="point"
                            position="year*value"
                            size={4}
                            shape={'circle'}
                            style={{
                                stroke: '#fff',
                                lineWidth: 1
                            }}
                        />
                    </Chart>
                </Card>
            </div>
        );
    }
}
export default BizCharts;
