import React from "react";
import "./style.css";



const SearchForm = (props) => {

  return (
    <form className="search">
    <div className="form-group">
      <label htmlFor="sign">Sign Name:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="sign"
        list="signs"
        type="text"
        className="form-control"
        placeholder="Type in a sign to begin"
        id="sign"
      />
      <datalist id="signs">
        {props.signs.map(sign => (
          <option value={sign} key={sign} />
        ))}
      </datalist>
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </div>
  </form>
    );
}

export default SearchForm;