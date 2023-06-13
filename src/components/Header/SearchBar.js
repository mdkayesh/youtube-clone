import React, { useState } from "react";
import styles from "../../Utils/styles";
import { Microphn, Search } from "../../Assets/Icons";
import { useContextValues } from "../../Context/ContextApI";
import { fetchApiFromUrl } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { getSearchResults, setIsLoading } = useContextValues();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsLoading(true);
    navigate(`/search/${searchQuery}`);

    try {
      const results = await fetchApiFromUrl(`search/?q=${searchQuery}`);
      getSearchResults(results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchBar w-full">
      <form
        action=""
        className="flex gap-2 items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full">
          <div className="input w-full relative flex items-center border-[#4d4d4d] border-solid border bg-[#121212] rounded-l-3xl focus-within:border-blue-600 focus-within:pl-7 ml-7 focus-within:ml-0 [&_.search]:focus-within:block">
            <div className="search text-xl absolute top-1/2 left-0 -translate-y-1/2 hidden pl-4">
              <Search />
            </div>
            <input
              type="search"
              name="search"
              id="search"
              value={searchQuery}
              placeholder="Search..."
              className="block px-4 py-2 bg-transparent outline-none w-full"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={`${styles.btnCommonStyle} text-xl w-16 py-2 px-4 flex justify-center items-center rounded-tr-3xl rounded-r-3xl bg-[#222222] border border-[#212121] border-solid`}
          >
            <span>
              <Search />
            </span>
          </button>
        </div>
        <button
          className={`mic text-xl p-2 rounded-full ${styles.btnCommonStyle}`}
        >
          <Microphn />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
