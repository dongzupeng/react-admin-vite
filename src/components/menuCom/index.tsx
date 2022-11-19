import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
import { useNavigate,useLocation } from "react-router-dom"
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', '', <UserOutlined />,
     [
        getItem('Tom', '/user/tom'),
        getItem('Bill', '/user/bill'),
        getItem('Alex', '/user/alex'),
    ]
    ),
    getItem('Team', '/team', <TeamOutlined />,
    [
        getItem('Team 1', '/team/one'), 
        getItem('Team 2', '/team/two')
    ]
    ),
];

const MenuCom: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(['']);
    const NavigateTo = useNavigate();
    const currentRoute = useLocation();
    //定义跳转方法
    const menuTo = (e: { key: string }) => {
        console.log(currentRoute,"@@@");
        //跳转
        NavigateTo(e.key)
    }
    //展开设置
    const handelOpenchange = (keys: string[]) => {
        console.log(keys);
        //设置最后一项展开
        setOpenKeys([keys[keys.length - 1]])
    }

    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuTo}
            // 菜单展开回收事件
            onOpenChange={handelOpenchange}
            // 当前菜单展开key数组
            openKeys={openKeys}
        />
    );
};

export default MenuCom;