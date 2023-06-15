import React from "react";
import { Layout, Image, Typography } from 'antd';
import Logo from './images/Instaverse.png';
import Home from './components/Home';

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return(
        <Layout>
            <Header>
                <Image width={45} preview={false} src={Logo} />
                <Title>Instaverse</Title>
            </Header>
            <Home />
            <Footer> 2023 Instaverse </Footer>
        </Layout>
    )
}

export default App;