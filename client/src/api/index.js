import axios from 'axios'

const storyUrl = "http://localhost:5000/stories"
const singUrl = "http://localhost:5000/users/signup"
const logUrl = "http://localhost:5000/users/login"

export const fetchStories = async () => axios.get(storyUrl)
export const createStory = async (story) => axios.post(storyUrl, story)
export const updateStory = async (id, story) => axios.patch(`${storyUrl}/${id}`, story)
export const deleteStory = async (id) => axios.delete(`${storyUrl}/${id}`)
export const likeStory = async (id) => axios.patch(`${storyUrl}/${id}/likeStory`)
export const login = async (values) => axios.post(logUrl, values)
export const signup = async (values) => axios.post(singUrl, values)