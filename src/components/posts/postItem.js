import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DateFormatOne } from "../../uitls/dateFormats";

const PostItem = ({
  post: { id, content, title, urlToImage, publishedAt },
}) => {
  return (
    <>
      <div className="col-md-3">
          <div className="card">
            <img src={urlToImage} className="card-img-top" alt="newsImg" />
            <div className="card-body">
              <Link to={`/${id}`}>
                {" "}
                <p className="card-text">{title}</p>
              </Link>
              <span>
                <DateFormatOne dateVal={publishedAt} />
              </span>
            </div>
          </div>
      </div>
    </>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null)(PostItem);
