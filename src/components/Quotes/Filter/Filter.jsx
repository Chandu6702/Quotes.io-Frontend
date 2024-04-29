import React from "react";
import Styles from "./Filter.module.css";

function Filter() {
  return (
    <div id={Styles["container"]}>
      <section id={Styles["genres"]}>
        <h3>Genres</h3>
        <hr />
        <ul>
          <li>motivational</li>
          <li>love</li>
          <li>friendship</li>
          <li>sad</li>
          <li>happy</li>
        </ul>
      </section>
      <section id={Styles["sort-by"]}>
        <h3>Sort-By</h3>
        <hr />
        <label for="latest">
          <input type="radio" id={Styles["latest"]} name="choice" /> Latest
        </label>

        <label for="oldest">
          <input type="radio" id={Styles["oldest"]} name="choice"/> oldest
        </label>

        <label for="most-liked">
          <input type="radio" id={Styles["most-liked"]} name="choice"/> Most-liked
        </label>
      </section>
    </div>
  );
}

export default Filter;
