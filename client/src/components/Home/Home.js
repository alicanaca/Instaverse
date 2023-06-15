import React from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";

const { Sider, Content } = Layout;

const Home = () => {
    return(
        <Layout>
            <Sider width={400}>
                <StoryForm />
            </Sider>
            <Content>
                <StoryList />
            </Content>
        </Layout>
    )
}

export default Home;