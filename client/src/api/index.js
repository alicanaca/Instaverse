import axios from 'axios'

const url = "http://localhost:5000/stories"

export const fetchStories = () => axios.get(url)