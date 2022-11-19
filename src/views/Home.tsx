import { Breadcrumb, Layout } from 'antd';
import React, { useState, Suspense } from 'react';
import { useNavigate, Outlet } from "react-router-dom"
import MenuCom from "@/components/menuCom"

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const NavigateTo = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                <div className="logo" />
                {/* 菜单栏 */}
                <MenuCom></MenuCom> 
            </Sider>
            <Layout className="site-layout">
                {/* 头部 */}
                <Header className="site-layout-background" style={{ padding: 0 }} />
                {/* 内容 */}
                <Content style={{ margin: '0 16px' }}>
                    {/* 面包屑 */}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    {/* 页面内容 */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {/* 菜单栏 */}
                        <Suspense fallback={<h2>Loading..</h2>}>
                            <Outlet></Outlet>
                        </Suspense>
                    </div>
                </Content>
                {/* 底部 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;