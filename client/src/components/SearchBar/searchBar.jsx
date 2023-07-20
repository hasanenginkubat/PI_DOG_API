import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../actions/index";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(getDogsByQuery(query));
      setQuery("");
    }
  };

  return (
    <div className={style.searchBar}>
      <input
        className={style.input}
        value={query}
        type="text"
        placeholder="Search a dog..."
        onChange={handleInputChange}
      />
      <button className={style.button} type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
