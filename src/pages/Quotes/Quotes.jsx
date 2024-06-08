import React from "react";
import Styles from "./Quotes.module.css";
import Card from "../../components/Card/Card.jsx";
import Filter from "../../components/VerticalFilter/VerticalFilter.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function Quotes() {
  return (
    <div id={Styles["wrapper"]}>
      <div id={Styles["container"]}>
        <div>
          <SearchBar />
        </div>

        <div id={Styles['section']}>
          <div id={Styles['filter']}>
            <Filter />
          </div>
          <div id={Styles['cards']}>
            <Card text="hgghuybghhgbbhhnbbbbbffsdf" />
            <Card text="khjhmvbcj jhgkvjhg.b.lkhkhkhk" />
            <Card text="hgghuybghhgbbhhjvjmbjhkh,n,j" />
            <Card text="hgghuybghnvjbvhn jbmmb" />
            <Card text="hgghuybkbhbcb  vhigvjgh vbvjbcb" />
            <Card text="hgghuybkbhbcb  vhigvjgh vbvjbcb" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
