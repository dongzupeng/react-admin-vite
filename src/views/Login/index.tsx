
import { Card, Input, Space, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';
import styles from "./login.module.scss"

const Login = () => {

    return (
        <div className={styles.login}>
            <div className={styles.systemName}>头文字D系统</div>
            <Card className={styles.loginBox}>
                <Space direction="vertical" style={{display:"flex"}}>
                    <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} />
                    <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined />} />
                    <div className={styles.captchaBox}>
                        <Input placeholder='验证码'/>
                        <div className={styles.captchaImg}>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <Button type="primary" size="large" block>
                        登录
                    </Button>
                </Space>
            </Card>
        </div>

    );
};

export default Login;