import React from 'react';
import { Switch, Route ,Redirect,} from 'react-router-dom';
import loadable from '@/utils/loadable';
import PrivateRoute from '@/components/PrivateRoute';
// 路由
const Home = loadable(() => import(/* webpackChunkName: 'home' */ '@/pages/Home'));
// ui
const ButtonDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/ButtonDemo'));
const IconDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/IconDemo'));
const DialogDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/DialogDemo'));
const NotificationDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/NotificationDemo'));
const TabsDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/TabsDemo'));
const GalleryDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/GalleryDemo'));
const CarouselDemo = loadable(() => import(/* webpackChunkName: 'ui' */ '@/pages/UI/CarouselDemo'));

// form
const BaseForm = loadable(() => import(/* webpackChunkName: 'form' */ '@/pages/Form/BaseForm'));
const StepForm = loadable(() => import(/* webpackChunkName: 'form' */ '@/pages/Form/StepForm'));

// table
const BaseTable = loadable(() => import(/* webpackChunkName: 'table' */ '@/pages/Table/BaseTable'));

// charts
const BizCharts = loadable(() => import(/* webpackChunkName: 'charts' */ '@/pages/Charts/BizCharts'));
const ECharts = loadable(() => import(/* webpackChunkName: 'charts' */ '@/pages/Charts/ECharts'));

// rich-text
const RichText = loadable(() => import(/* webpackChunkName: 'editor' */ '@/pages/Editor/Wysiwyg'));

// about
const About = loadable(() => import(/* webpackChunkName: 'about' */ '@/pages/About'));

// const NotFound = loadable(() => import(/* webpackChunkName: 'notfound' */ '@/pages/Error/NotFound'));

class Router extends React.Component{
	render (){
        return (
            <Switch>
                <PrivateRoute exact path='/home' component={Home}/>
                <PrivateRoute exact path='/ui/button' component={ButtonDemo}/>
                <PrivateRoute exact path='/ui/icon' component={IconDemo}/>
                <PrivateRoute exact path='/ui/dialog' component={DialogDemo}/>
                <PrivateRoute exact path='/ui/notification' component={NotificationDemo}/>
                <PrivateRoute exact path='/ui/tabs' component={TabsDemo}/>
                <PrivateRoute exact path='/ui/gallery' component={GalleryDemo}/>
                <PrivateRoute exact path='/ui/carousel' component={CarouselDemo}/>
                <PrivateRoute exact path='/form/baseform' component={BaseForm}/>
                <PrivateRoute exact path='/form/stepform' component={StepForm}/>
                <PrivateRoute exact path='/table/basetable' component={BaseTable}/>
                <PrivateRoute exact path='/charts/bizcharts' component={BizCharts}/>
                <PrivateRoute exact path='/charts/echarts' component={ECharts}/>
                <PrivateRoute exact path='/editor/wysiwyg' component={RichText}/>
                <PrivateRoute exact path='/about' component={About}/>
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        );
    }
};


export default Router;
