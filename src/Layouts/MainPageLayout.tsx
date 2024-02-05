import React, { ChangeEvent, useState } from "react";
import Advantages from "../components/Advantages/Advantages";
import { useHistory } from "react-router-dom";

export const MainPageLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search/${searchValue}`);
  };

  return (
    <div className="search-wrapper container">
      <div className="divider">
        <form className="search" onSubmit={handleSubmit}>
          <h2 className="search__heading">
            ВАШ ФАВОРИТ <br /> В ВЫБОРЕ АВТОЗАПЧАСТЕЙ
          </h2>
          <div className="search-input">
            <input
              className="search-input__input"
              type="text"
              name="search"
              value={searchValue}
              placeholder="Легко найти"
              onChange={handleOnChange}
            />
            <button type="submit" disabled={!searchValue} className="search-input__send-button">
              найти
            </button>
          </div>
        </form>
      </div>
        <Advantages />
    </div>
  );
};

export default MainPageLayout;
