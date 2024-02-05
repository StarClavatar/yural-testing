import "./AnaloguesTable.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnalogues } from "../../store/action creators/analogues";
import { useAppDispatch } from "../../store";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MuiTable from "../MuiTable/MuiTable";

const AnaloguesTable = () => {
  const params: { number?: string; brand?: string; analogues?: string } =
    useParams();
  const { goods } = useTypedSelector((state) => state.analogues);
  // console.log(goods && goods[0]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const { number, brand, analogues = "on" } = params;
    if (number && brand) {
      dispatch(getAnalogues(Number(number), brand, analogues));
    }
  }, []);
  return (
    <div className="analogues-table container">
      <MuiTable
        data={goods}
        tableHeaders={[
          "Производитель",
          "Номер",
          "Наименование",
          "Цена",
          "Наличие",
          "Корзина",
        ]}
        tableName="analogues"
      />
      <h2 className="search-results search-results_analogues"></h2>
      {goods && goods[0] && goods[0].analogues && (
        <MuiTable
          data={goods[0].analogues}
          tableHeaders={[
            "Производитель",
            "Номер",
            "Наименование",
            "Цена",
            "Наличие",
            "Корзина",
          ]}
          tableName="analogues"
        />
      )}
    </div>
  );
};

export default AnaloguesTable;
