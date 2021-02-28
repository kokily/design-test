import React from 'react';

function Search() {
  return (
    <div className="search-with-select">
      <a href="#" className="mobile-search-toggle-btn mr-2" data-porto-toggle-class="open">
        <i className="icons icon-magnifier text-color-dark text-color-hover-primary" />
      </a>
      <div className="search-form-wrapper input-group">
        <input
          className="form-control text-1"
          name="search"
          type="text"
          placeholder="검 색"
        />
        <span className="input-group-append">
          <button className="btn">
            <i className="icons icon-magnifier header-nav-top-icon text-color-dark" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
