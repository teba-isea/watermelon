import React from "react";
import PropTypes from "prop-types"

const Image = ({ image }) => {
  const {previewURL, likes, tags, views, largeImageURL } = image;

  return (
    <div className="mosaic" title={`likes:${likes} views:${views}`}>
      <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
      <img src={previewURL} alt={tags} className="border-cube" />
      </a>
    </div>
  );
};

Image.propTypes = {
  image : PropTypes.object.isRequired
}

export default Image;