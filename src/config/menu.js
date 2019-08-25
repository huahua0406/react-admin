export default [
    {
        title: '首页',
        icon: 'home',
        key: '/home'
    },
    {
        title: 'UI',
        icon: 'share-alt',
        key: '/ui',
        children: [
            {
                title: '按钮',
                key: '/ui/button'
            },
            {
                title: '图标',
                key: '/ui/icon'
            },
            {
                title: '对话框',
                key: '/ui/dialog'
            },
            {
                title: '通知提醒框',
                key: '/ui/notification'
            },
            {
                title: '标签页',
                key: '/ui/tabs'
            },
            {
                title: '图片画廊',
                key: '/ui/gallery'
            },
            {
                title: '轮播图',
                key: '/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        icon: 'form',
        key: '/form',
        children: [
            {
                title: '基础表单',
                key: '/form/baseform'
            },
            {
                title: '分步表单',
                key: '/form/stepform'
            }
        ]
    },
    {
        title: '表格',
        icon: 'table',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basetable'
            }
        ]
    },
    {
        title: '图表',
        icon: 'line-chart',
        key: '/charts',
        children: [
            {
                title: 'BizCharts',
                key: '/charts/bizcharts'
            },
            {
                title: 'ECharts',
                key: '/charts/echarts'
            }
        ]
    },
    {
        title: '富文本',
        icon: 'edit',
        key: '/editor',
        children: [
            {
                title: '富文本编辑器',
                key: '/editor/wysiwyg'
            }
        ]
    },
    {
        title: '关于',
        icon: 'info-circle',
        key: '/about',
    },
];
