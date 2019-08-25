import loadable from '@/utils/loadable';

// 参数一定要是函数，否则不会懒加载，只会代码拆分
const Home = loadable(()=>import(/* webpackChunkName: 'home' */'@/pages/Home/Home'));

// ui
const ButtonDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/ButtonDemo/ButtonDemo'));
const IconDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/IconDemo/IconDemo'));
const DialogDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/DialogDemo/DialogDemo'));
const NotificationDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/NotificationDemo/NotificationDemo'));
const TabsDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/TabsDemo/TabsDemo'));
const GalleryDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/GalleryDemo/GalleryDemo'));
const CarouselDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/CarouselDemo/CarouselDemo'));

// form
const BaseForm = loadable(()=>import(/* webpackChunkName: 'form' */'@/pages/Form/BaseForm/BaseForm'));
const StepForm = loadable(()=>import(/* webpackChunkName: 'form' */'@/pages/Form/StepForm/StepForm'));

// table
const BaseTable = loadable(()=>import(/* webpackChunkName: 'table' */'@/pages/Table/BaseTable/BaseTable'));

// charts
const BizCharts = loadable(()=>import(/* webpackChunkName: 'charts' */'@/pages/Charts/BizCharts'));
const ECharts = loadable(()=>import(/* webpackChunkName: 'charts' */'@/pages/Charts/ECharts'));

// rich-text
const RichText = loadable(()=>import(/* webpackChunkName: 'editor' */'@/pages/Editor/Wysiwyg'));

// about
const About = loadable(()=>import(/* webpackChunkName: 'about' */'@/pages/About/About'));

// const NotFound = loadable(()=>import(/* webpackChunkName: 'notfound' */'@/pages/Error/NotFound'));

const routes = [
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
        path:'/ui/tabs',
        component: TabsDemo
    },
    {
        path:'/ui/gallery',
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
        path:'/table/basetable',
        component: BaseTable
    },
    {
        path:'/charts/bizcharts',
        component: BizCharts
    },
    {
        path:'/charts/echarts',
        component: ECharts
    },
    {
        path:'/editor/wysiwyg',
        component: RichText
    },
    {
        path:'/about',
        component: About
    }
]

export default routes