import { ChangeEvent, useEffect } from "react";
import "./Search.css";
import MuiTable from "../MuiTable/MuiTable";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getDetails } from "../../store/action creators/details";
import { useAppDispatch } from "../../store";
import useDebounce from "../../hooks/useDebounce";
import { getGoods } from "../../store/selectors/detailsSelector";
import { useParams } from "react-router-dom";


const Search = () => {
  const params:{number?: string} = useParams()
  const [debouncedValue, searchValue, setSearchValue] = useDebounce<string>('', 1000);
  const goods = useTypedSelector(getGoods)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(Number(debouncedValue))dispatch(getDetails(Number(debouncedValue)))
  }, [debouncedValue]);
  useEffect(()=>{
    if(params?.number) {
      dispatch(getDetails(Number(params.number)))
    }
  },[params])
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="container">
      <form
        className="search"
        // onSubmit={(e) => {
        //   e.preventDefault();
        // }}
      >
        <h2 className="search__heading">ВАШ ФАВОРИТ <br/> В ВЫБОРЕ АВТОЗАПЧАСТЕЙ</h2>
        <div className="search-input">
          <input
            className="search-input__input"
            type="text"
            name="search"
            value={params.number ? searchValue : params.number}
            placeholder="Легко найти"
            onChange={handleOnChange}
          />
          <button type="submit" disabled={!searchValue} className="search-input__send-button">
            найти
          </button>
        </div>
      </form>
      <div className="search-results"></div>
      <MuiTable data={goods} tableHeaders={['Бренд', 'Артикул','Наименование','Ссылка']} tableName=''/>
    </div>
  );
};

export default Search;
