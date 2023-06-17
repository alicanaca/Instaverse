import React, { useState } from 'react'
import styles from './styles'
import { Form, Input, Button, Card, Layout, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(false)
    const user = null;
    const [form] = Form.useForm();

    const onSubmit = () => {

    }

    const switchMode = () => {
        setIsLogin(prevIsLogin => !prevIsLogin)
    }

    return (
        <Layout style={styles.container}>
            <Card style={styles.card} title={
                <Title level={4} style={{ textAlign: "center" }}>
                    {isLogin ? "Login to" : "Join"} Instaverse
                </Title>
            }>
                <Form
                    name='authform' form={form} size='large'
                    wrapperCol={{ span: 20, offset: 2 }}
                    onFinish={onSubmit}
                >
                    {isLogin || (
                        <>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please enter your username"
                                    }
                                ]}
                            >
                                <Input prefix={<UserOutlined />} placeholder='Username' />
                            </Form.Item>
                        </>
                    )}
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email"
                            }
                        ]}
                    >
                        <Input type='email' prefix={<MailOutlined />} placeholder='Email address' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password"
                            }
                        ]}
                    >
                        <Input.Password type='password' prefix={<LockOutlined />} placeholder='Password' />
                    </Form.Item>
                    {isLogin || (
                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your password"
                                }
                            ]}
                        >
                            <Input.Password type='password' prefix={<LockOutlined />} placeholder='Confirm password' />
                        </Form.Item>
                    )}
                    <Form.Item style={styles.buttonRow}>
                        <Button htmlType='submit' type='primary'>
                            {isLogin ? "Login" : "Join" }
                        </Button>
                        <span style={{ margin: "0 20px 0 35px" }}> or </span>
                        <Button type='link' onClick={switchMode}>
                            {isLogin ? "Register now" : "have an account?" }
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    )
}
