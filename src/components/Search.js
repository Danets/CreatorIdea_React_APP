import React from 'react';

const Search = (props) => {
    return (
        <div className="searchbar">
            <input
                type="text"
                className="form-control"
                placeholder="Search people by name..."
                onChange={props.onSearch}
            />
        </div>
    );
};

export default Search;