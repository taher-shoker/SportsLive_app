import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../../action/postActions";
import { connect } from "react-redux";
import PostItem from "./postItem";
let arrayForHoldingPosts = [];

const AllPosts = ({ getPosts, post: { posts } }) => {
  const [next, setNext] = useState(8);
  const [morePosts, setMorePosts] = useState([]);
  const MAX_POSTS = 8;

  useEffect(() => {
    getPosts();
  }, [getPosts, posts]);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts);
    setMorePosts(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, MAX_POSTS);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + MAX_POSTS);
    setNext(next + MAX_POSTS);
  };
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <h5>recently added</h5>
          </div>
        </div>
        <div className="row">
          {posts.length > 0 ? (
            morePosts.map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <>
              {" "}
              <h4>There Is No Posts </h4>{" "}
            </>
          )}
        </div>
        <div className="row text-center">
          <div className="offset-3 col-6">
            {posts.length < next ? (
              ""
            ) : (
              <button className="btn bg-white" onClick={handleShowMorePosts}>
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

AllPosts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(AllPosts);
