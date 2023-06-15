import React, { useEffect } from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from './styles'
import { useDispatch } from "react-redux";
import { getStories } from "../../actions/stories"

const { Sider, Content } = Layout;

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch])

    return(
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm />
            </Sider>
            <Content style={styles.content}>
                <StoryList />
            </Content>
        </Layout>
    )
}

export default Home;