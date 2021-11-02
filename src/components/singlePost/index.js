import React, { useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../common/spinner";
import { getPost } from "../../action/postActions";
import { DateFormatTwo } from "../../uitls/dateFormats";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);
  return post === null || loading ? (
    <Spinner />
  ) : (
    <>
      <section className="container">
        <div className="post">
          <img className="single-img" src={post.urlToImage} alt="img-post" />
          <div className="details">
            <h3 className="">{post.title}</h3>
            <ul>
              <li>By Taher Shoker</li>
              <li className="text-uppercase">
                <DateFormatTwo dateVal={post.publishedAt} />
              </li>
              <li>200 Comments</li>
            </ul>
            <p className="">{post.content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
