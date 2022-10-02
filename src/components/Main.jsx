import React from "react";
import { TitleDesc } from "./TitleDesc";
import { SearchBar } from "./SearchBar";
import { Divider } from "antd";

const Main = () => (
  <>
    <TitleDesc />
    <Divider orientation="left">Search by User Name</Divider>
    <SearchBar />
  </>
);

export default Main;
