import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import loadable from '@/utils/loadable';

// 参数一定要是函数，否则不会懒加载，只会代码拆分
const Home = loadable(()=>import(/* webpackChunkName: 'home' */'@/pages/Home'));

// ui
const ButtonDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/ButtonDemo/ButtonDemo'));
const IconDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/IconDemo/IconDemo'));
const DialogDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/DialogDemo/DialogDemo'));
const CarouselDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/CarouselDemo/CarouselDemo'));

// form
const BaseForm = loadable(()=>import(/* webpackChunkName: 'form' */'@/pages/Form/BaseForm/BaseForm'));
const StepForm = loadable(()=>import(/* webpackChunkName: 'form' */'@/pages/Form/StepForm/StepForm'));

// table
const BaseTable = loadable(()=>import(/* webpackChunkName: 'table' */'@/pages/Table/BaseTable/BaseTable'));

// about
const About = loadable(()=>import(/* webpackChunkName: 'about' */'@/pages/About/About'));
// notice
const Notice = loadable(()=>import(/* webpackChunkName: 'notice' */'@/pages/Notice/Notice'));


const NotFound = loadable(()=>import(/* webpackChunkName: 'notfound' */'@/pages/Error/NotFound'));

const Routes = () => (
    // TODO:未登录 跳转到login Redirect
    <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/ui/button" component={ButtonDemo}/>
        <Route exact path="/ui/icon" component={IconDemo}/>
        <Route exact path="/ui/dialog" component={DialogDemo}/>
        <Route exact path="/ui/carousel" component={CarouselDemo}/>
        <Route exact path="/form/baseform" component={BaseForm}/>
        <Route exact path="/form/stepform" component={StepForm}/>
        <Route exact path="/table/basetable" component={BaseTable}/>
        <Route exact path="/notice" component={Notice}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound}/>
    </Switch>
);




export default Routes;