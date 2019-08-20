import loadable from '@/utils/loadable';

// 参数一定要是函数，否则不会懒加载，只会代码拆分
const Home = loadable(()=>import(/* webpackChunkName: 'home' */'@/pages/Home'));

// ui
const ButtonDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/ButtonDemo/ButtonDemo'));
const IconDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/IconDemo/IconDemo'));
const DialogDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/DialogDemo/DialogDemo'));
const NotificationDemo = loadable(()=>import(/* webpackChunkName: 'ui' */'@/pages/UI/NotificationDemo/NotificationDemo'));
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
        path:'/notice',
        component: Notice
    },
    {
        path:'/about',
        component: About
    }
]

export default routes