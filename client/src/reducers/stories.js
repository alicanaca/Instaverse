
const storyReducer = (state = [], action) => {
    if(action.type === "FETCH_ALL_STORIES"){
        return action.payload;
    }
}

export default storyReducer