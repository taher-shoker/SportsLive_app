import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../../action/postActions";
import { connect } from "react-redux";
import PostItem from "./postItem";
import { Link } from "react-router-dom";

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
      <>
    <section className="">
        <img src="banner.png" alt="banner"/>    
    </section>  
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {" "}
            <h5>recently added</h5>
          </div>
          <div className="col-md-3 offset-md-6">
              <Link to="/allPosts" className="btn float-end bg-white" > Show all </Link>
          </div>
        </div>
        <div className="row">
          {posts.length > 0 ? (
            posts.slice(0, 8).map((post) => <PostItem key={post.id} post={post} />)
          ) : (
            <>
              {" "}
              <h4>There Is No Posts </h4>{" "}
            </>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
