import axios from "axios";
import { GET_POST, GET_POSTS } from "./types";

// Get all posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("News.json");
    dispatch({
      type: GET_POSTS,
      payload: res.data.articles,
    });
  } catch (err) {
    console.log(err.msg);
  }
};

// Get Post
export const getPost = (id) => async (dispatch) => {
  console.log(id);

  try {
    const res = await axios.get("News.json");
    const result = res.data.articles.filter(
      (item) => item.id.toLocaleString() === id
    );
    dispatch({
      type: GET_POST,
      payload: result[0],
    });
  } catch (err) {
    console.log(err.msg);
  }
};
