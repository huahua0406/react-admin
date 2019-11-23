// 路由配置

import loadable from '@/utils/loadable';

// 参数一定要是函数，否则不会懒加载，只会代码拆分
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


export const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/ui/button',
        component: ButtonDemo
    },
    {
        path: '/ui/icon',
        component: IconDemo
    },
    {
        path: '/ui/dialog',
        component: DialogDemo
    },
    {
        path: '/ui/notification',
        component: NotificationDemo
    },
    {
        path: '/ui/tabs',
        component: TabsDemo
    },
    {
        path: '/ui/gallery',
        component: GalleryDemo
    },
    {
        path: '/ui/carousel',
        component: CarouselDemo
    },
    {
        path: '/form/baseform',
        component: BaseForm
    },
    {
        path: '/form/stepform',
        component: StepForm
    },
    {
        path: '/table/basetable',
        component: BaseTable
    },
    {
        path: '/charts/bizcharts',
        component: BizCharts
    },
    {
        path: '/charts/echarts',
        component: ECharts
    },
    {
        path: '/editor/wysiwyg',
        component: RichText
    },
    {
        path: '/about',
        component: About
    }
];
