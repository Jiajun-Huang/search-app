const SearchBox = ({ onChangeHandler, className, placeholder }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
