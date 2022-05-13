import axios from "axios";
import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const URL_API = import.meta.env.VITE_URL_API;
const ApiContext = createContext();
export const useApiContext = () => useContext(ApiContext);

const fetchApi = async (action, param) => {
  try {
    const respon = await axios.get(URL_API, {
      params: {
        action: action,
        param: JSON.stringify(param),
      },
    });
    return respon.data;
  } catch (err) {
    return { error: true, message: err.message };
  }
};

export default function ApiContextProvider({ children }) {
  //

  const readPemakaian = async (param) => {
    const result = await fetchApi("read", param);
    return result;
  };

  const readLastPemakaian = async () => {
    const result = await fetchApi("read-last");
    return result;
  };

  const addPemakaian = async (param) => {
    param["id"] = uuidv4();
    const result = await fetchApi("insert", param);
    return result;
  };

  const deletePemakaian = async (param) => {};
  const updatePemakaian = async (param) => {};
  //
  return (
    <ApiContext.Provider
      value={{
        readPemakaian,
        readLastPemakaian,
        addPemakaian,
        deletePemakaian,
        updatePemakaian,
      }}
    >
      <>{children}</>
    </ApiContext.Provider>
  );
}
