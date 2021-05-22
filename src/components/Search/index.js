import React from "react";
import { Input } from "./styles";

const Search = ({ value, onChange, placeholder }) => {
  return <Input value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Search;
