import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';
const menuData = [
    {
        title:'首页',
        key:'/home',
        icon:<MailOutlined/>
    },{
        title:'商品',
        key:'/product',
        icon:<PieChartOutlined/>,
        children:[
            {
                title:'品类管理',
                key:'/classManage',
                icon:<PieChartOutlined/>,
            },
            {
                title:'商品管理',
                key:'/line',
                icon:<PieChartOutlined/>,
            }
        ]
    },
    {
        title:'用户管理',
        key:'/bar',
        icon:<MailOutlined/>
    },
    {
        title:'角色管理',
        key:'/pie',
        icon:<MailOutlined/>
    },
]
export default menuData