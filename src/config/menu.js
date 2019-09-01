export default [
    {
        name: '首页',
        icon: 'home',
        path: '/home'
    },
    {
        name: 'UI',
        icon: 'share-alt',
        path: '/ui',
        children: [
            {
                name: '按钮',
                path: '/ui/button'
            },
            {
                name: '图标',
                path: '/ui/icon'
            },
            {
                name: '对话框',
                path: '/ui/dialog'
            },
            {
                name: '通知提醒框',
                path: '/ui/notification'
            },
            {
                name: '标签页',
                path: '/ui/tabs'
            },
            {
                name: '图片画廊',
                path: '/ui/gallery'
            },
            {
                name: '轮播图',
                path: '/ui/carousel'
            }
        ]
    },
    {
        name: '表单',
        icon: 'form',
        path: '/form',
        children: [
            {
                name: '基础表单',
                path: '/form/baseform'
            },
            {
                name: '分步表单',
                path: '/form/stepform'
            }
        ]
    },
    {
        name: '表格',
        icon: 'table',
        path: '/table',
        children: [
            {
                name: '基础表格',
                path: '/table/basetable'
            }
        ]
    },
    {
        name: '图表',
        icon: 'line-chart',
        path: '/charts',
        children: [
            {
                name: 'BizCharts',
                path: '/charts/bizcharts'
            },
            {
                name: 'ECharts',
                path: '/charts/echarts'
            }
        ]
    },
    {
        name: '富文本',
        icon: 'edit',
        path: '/editor',
        children: [
            {
                name: '富文本编辑器',
                path: '/editor/wysiwyg'
            }
        ]
    },
    {
        name: '关于',
        icon: 'info-circle',
        path: '/about'
    }
];
