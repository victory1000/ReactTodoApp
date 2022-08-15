import React from "react";

const SearchPanel = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="input-group">
          <input type="text" placeholder="search" className="form-control"/>
          <button type="button" className="btn btn-light">All</button>
          <button type="button" className="btn btn-primary">All</button>
          <button type="button" className="btn btn-danger">All</button>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;