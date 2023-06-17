import React from "react";
import { Link } from "react-router-dom";
import { Layout, Image, Typography, Button, Avatar } from 'antd';
import Logo from '../../images/Instaverse.png';
import styles from "./styles";

const { Title } = Typography;
const { Header } = Layout;

export default function AppBar() {
    const user = null

    return (
        <Header style={styles.header}>
            <Link to="/">
                <div style={styles.homeLink}>
                    <Image style={styles.image} width={45} preview={false} src={Logo} />
                    &nbsp;
                    <Title style={styles.title}>Instaverse</Title>
                </div>
            </Link>
            {
                !user ? (
                    <Link to="/authform" >
                        <Button style={styles.login} htmlType="button" > Login </Button>
                    </Link>
                ) : (
                    <div style={styles.userInfo} >
                        <Avatar style={styles.avatar} size="large" alt="username" > You </Avatar>
                        <Title style={styles.title} level={4} > John </Title>
                        <Button htmlType="button" > Logout </Button>
                    </div>
                )
            }
        </Header>
    )
}
