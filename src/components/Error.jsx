import React from "react";
import PropTypes from "prop-types"

const Error = ({ message }) => {
  return (
    <div className="col s10 m8 offset-m2 mg5">
      <div className="card grey lighten-1 center">
      <div className="card-content  white-text">
        <span className="card-title">{message}</span>
      </div>
    </div>
    </div>
  );
};

Error.propTypes = {
  message : PropTypes.string.isRequired
}

export default Error;