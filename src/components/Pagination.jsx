import React from "react";
import PropTypes from "prop-types"


const Pagination = ({ pages, actualPage, setActualPage,error }) => {
  if (!pages || error) return null;

  const upActualPage = (value) => {
    if (value === "more" && actualPage < pages) setActualPage(actualPage + 1);
    if (value === "less" && actualPage > 1) setActualPage(actualPage - 1);
  };

  return (
    <div className="flex-between">
      {actualPage === 1 ? null : (
        <button
          type="submit"
          className="waves-effect waves-red btn materialize-red bg-darken-3 text-lighten-4"
          onClick={() => upActualPage("less")}
        >
          &laquo; previous
        </button>
      )}

      

      {actualPage === pages ? null : (
        <button
          type="submit"
          className="waves-effect waves-red btn materialize-red bg-darken-3 text-lighten-4"
          onClick={() => upActualPage("more")}
        >
          next &raquo;
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  pages : PropTypes.number.isRequired,
  actualPage : PropTypes.number.isRequired,
  setActualPage : PropTypes.func.isRequired,
  error : PropTypes.bool.isRequired
}

export default Pagination;