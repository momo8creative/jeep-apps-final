import { createContext, useContext, useState } from "react";
import DatePicker from "../components/datetimepicker/datepicker/DatePicker";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export default function GlobalContextProvider({ children }) {
  const [isShowDatePicker, setIsShowDatePicker] = useState(false);
  const [currentValueDatePicker, setCurrentValueDatePicker] = useState();

  const getDatePicker = (cb, value) => {
    setIsShowDatePicker(true);
    setCurrentValueDatePicker(value);
    return cb(currentValueDatePicker);
  };

  const handleCloseDatePicker = (value) => {
    setCurrentValueDatePicker(value);
    setIsShowDatePicker(false);
  };

  //
  return (
    <GlobalContext.Provider value={{ getDatePicker }}>
      <DatePicker
        show={isShowDatePicker}
        value={currentValueDatePicker}
        setValue={handleCloseDatePicker}
      />
      <>{children}</>
    </GlobalContext.Provider>
  );
}
