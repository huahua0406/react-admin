import React, { Component } from 'react';
import Loadable from 'react-loadable';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//通用的Loading组件
class Loading extends Component {
    constructor(props) {
        super(props)
        NProgress.start()
    }

    componentDidMount() {
        NProgress.done()
    }

    render() {
        return <div />;
    }
}

const LoadableComponent = component => {
    return Loadable({
        loader: component,
        loading: () => <Loading />
    });
};

export default LoadableComponent;
