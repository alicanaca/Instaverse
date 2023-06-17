import React from "react";
import { Layout, Image, Typography, Button, Avatar } from 'antd';
import Logo from '../../images/Instaverse.png';
import styles from "./styles";

export default function AppBar() {
    return (
        <Header style={styles.header}>
            <Image style={styles.image} width={45} preview={false} src={Logo} />
            &nbsp;
            <Title style={styles.title}>Instaverse</Title>
        </Header>
    )
}
