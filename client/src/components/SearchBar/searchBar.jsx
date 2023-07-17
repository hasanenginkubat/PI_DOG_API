import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../actions/index";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      console.log(query);
      dispatch(getDogsByQuery(query));
      setQuery("");
    }
  };
  

  return (
    <div>
      <input
        value={query}
        type="text"
        placeholder="Search a dog..."
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
