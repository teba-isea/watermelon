import React, { useState } from "react";
import Error from "./Error"
import PropTypes from "prop-types"


const Form = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const upSearchTerm = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setSearch(searchTerm.toLowerCase());
  };

  return (
    <div className=" row center-align mb-5">
      <form onSubmit={(e) => upSearchTerm(e)}>
        <div className=" col s12 m8">
          <input
            type="text"
            className="input-field "
            placeholder="search an image, example: coffee or Elon Musk"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col s12 m4">
          <button
            type="submit"
            className="waves-effect waves-red btn btn-large materialize-red bg-darken-3 text-lighten-4"
          >
            Find!
          </button>
        </div>
      </form>

      {error ? <Error message="Field Empty!" /> : null}
    </div>
  );
};

Form.propTypes = {
  setSearch : PropTypes.func.isRequired
}

export default Form;