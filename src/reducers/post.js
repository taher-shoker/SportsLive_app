import { GET_POST, GET_POSTS } from "../action/types";
const initialState = {
  posts: [],
  post: null,
  loading: true
};

const Post = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading:false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };

    default:
      return state;
  }
};

export default Post;
