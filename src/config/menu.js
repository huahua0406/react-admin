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
                title: '轮播图',
                key: '/ui/carousel'
            }
        ]
    },
    {
        title: '表单',
        icon: 'appstore-o',
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
        icon: 'appstore-o',
        key: '/table',
        children: [
            {
                title: '基础表格',
                key: '/table/basetable'
            }
        ]
    },
    {
        title: '关于',
        icon: 'appstore-o',
        key: '/about',
    },
];
