
import {
    ArticleItem,
    ArticleList,
    Login,
    NotFound,
    Setting,
    DashBoard
} from '../views/index.js'

import { SettingOutlined,MenuUnfoldOutlined,OrderedListOutlined} from '@ant-design/icons';

export const mainRouter=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/404',
        component:NotFound
    },
]


export const adminRouter=[
    {
        path:'/admin/DashBoard',
        component:DashBoard,
        title:'仪表盘',
        icon:MenuUnfoldOutlined
    },
    // {
    //     path:'/admin/ArticleItem',
    //     component:ArticleItem,
    //     title:'文章详情'
    // },
    {
        path:'/admin/ArticleList',
        component:ArticleList,
        title:'文章管理',
        icon:OrderedListOutlined
    },
    {
        path:'/admin/Setting',
        component:Setting,
        title:'设置',
        icon:SettingOutlined
    },
]