import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Tooltip, Typography, Image } from "antd"
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons"
import styles from "./styles"
import moment from 'moment'
import { deleteStory, likeStory } from '../../actions/stories'

const { Meta } = Card
const { Link, Paragraph, Text } = Typography

function Story({ story, setSelectedId }) {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(true)

  const user = JSON.parse(localStorage.getItem("Profile"))

  const cardActions = [
    <div style={styles.actions}>
      <Tooltip onClick={() => { dispatch(likeStory(story._id))}} placement='top' title='Like' color='magenta'>
      <HeartTwoTone twoToneColor="magenta" />
      &nbsp; {story.likes.length} &nbsp;
      </Tooltip>
    </div>,
    <Tooltip placement='top' title='Edit'>
      <EditOutlined onClick={() => {
        setSelectedId(story._id)
      }} />
    </Tooltip>,
    <Tooltip placement='top' title='Delete' color='red'>
      <DeleteTwoTone onClick={() => {
        dispatch(deleteStory(story._id))
      }} twoToneColor='red' />
    </Tooltip>
  ]

  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={
        user?.result?._id === story?.userId ? cardActions : user?.result ? cardActions.slice(0, 1) : null
      }
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "more",
          onExpand: () => {
            setExpand(true)
          },
          onEllipsis: () => {
            setExpand(false)
          }
        }}
        >
          {story.caption}
        </Paragraph>
        {expand ?
          <Link href='#'>{story.tags.split(" ").map(
            (tag) => `#${tag} `
          )}</Link> : null
        }
        <br />
        <Text type='secondary'>{moment(story.postDate).fromNow()}</Text>
    </Card>
  )
}

export default Story
