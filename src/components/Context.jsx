import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

export const BioDataContext = createContext();

let initialState = {
  myData: [],
  query: "",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async () => {
    try {
      const res = await axios.get(
        "https://example-data.draftbit.com/books?_limit=50"
      );
      console.log(res.data);
      dispatch({
        type: "SHOW_BOOKS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchBook = (search) => {
    dispatch({
      type: "SEARCH_BOOK",
      query: search,
    });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <BioDataContext.Provider value={{ state, searchBook }}>
      {children}
    </BioDataContext.Provider>
  );
};

export default Context;
