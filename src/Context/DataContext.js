import React, { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../Reducers/DataReducer";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
};
