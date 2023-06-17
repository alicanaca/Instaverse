import React, { useEffect, useState } from "react";
import StoryForm from "../StoryForm";
import StoryList from "../StoryList";
import { Layout } from "antd";
import styles from './styles'
import { useDispatch } from "react-redux";
import { getStories } from "../../actions/stories"

const { Sider, Content } = Layout;

const Home = () => {
    const [selectedId, setSelectedId] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch])

    return(
        <Layout>
            <Sider style={styles.sider} width={400}>
                <StoryForm selectedId={selectedId} setSelectedId={setSelectedId} />
            </Sider>
            <Content style={styles.content}>
                <StoryList setSelectedId={setSelectedId} />
            </Content>
        </Layout>
    )
}

export default Home;