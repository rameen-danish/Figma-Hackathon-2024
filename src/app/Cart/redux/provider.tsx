"use client";
import ReactDOM from 'react-dom';
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Cartpage from '../page';

interface ProviderProps {
  children: ReactNode;
}

const Prvider: React.FC<ProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Prvider;