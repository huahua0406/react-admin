import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import 'animate.css';

import './styles.css';
const animations = [
    ['bounceInDown', 'bounceInUp'],
    ['bounceInLeft', 'bounceInRight'],
    ['rotateIn', 'rotateIn'],
    ['flipInX', 'flipInY'],
    ['rotateInDownLeft', 'rotateInUpRight'],
    ['rotateInDownRight', 'rotateInUpLeft'],
    ['zoomInLeft', 'zoomInRight'],
    ['zoomInDown', 'zoomInUp'],
    ['zoomIn', 'zoomIn'],
    ['lightSpeedIn', 'bounceInLeft']
];

// const colors = ['#364d79','#64cbcc','sandybrown','darksalmon','goldenrod','burlywood','darkseagreen','indianred']



function getAnimation(animations) {
    let index = Math.floor(Math.random() * animations.length);
    let arr = animations[index];
    arr = arr.map(item => {
        return `${item} animated slider-active`;
    });
    return arr;
}

class CarouselDemo extends Component {
    state = {
        current: 0
    };

    animations = getAnimation(animations);

    componentWillUpdate() {
        //当current变化时，也就是state变化时重新给animations赋值，否则animations不会改变.实现类似vue的watch
        //用componentWUpdate还是componentDidUpdate根据具体场景，componentDidUpdate一般是需要用到state时调用（因为setState是异步，需要等更新完成）
        console.log(this.state.current);
        this.animations = getAnimation(animations);;
    }

    render() {
        const { current } = this.state;
        return (
            <Card title="轮播图">
                <Carousel
                    speed={100}
                    arrows
                    afterChange={current => this.setState({ current })}
                    autoplay>
                    <div>
                        <div className="slider-item" style={{background:'#364d79'}}>
                            <h3 className={current === 0 ? this.animations[0] : ''}>
                                Ant Design of React
                            </h3>
                            <p className={current === 0 ? this.animations[1] : ''}>
                                The Fast Way Use Animation In React
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="slider-item" style={{background:'#64cbcc'}}>
                            <h3 className={current === 1 ? this.animations[0] : ''}>
                                Ant Design of React
                            </h3>
                            <p className={current === 1 ? this.animations[1] : ''}>
                                The Fast Way Use Animation In React
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="slider-item" style={{background:'sandybrown'}}>
                            <h3 className={current === 2 ? this.animations[0] : ''}>
                                Ant Design of React
                            </h3>
                            <p className={current === 2 ? this.animations[1] : ''}>
                                The Fast Way Use Animation In React
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="slider-item" style={{background:'darkseagreen'}}>
                            <h3 className={current === 3 ? this.animations[0] : ''}>
                                Ant Design of React
                            </h3>
                            <p className={current === 3 ? this.animations[1] : ''}>
                                The Fast Way Use Animation In React
                            </p>
                        </div>
                    </div>
                </Carousel>
            </Card>
        );
    }
}
export default CarouselDemo;
