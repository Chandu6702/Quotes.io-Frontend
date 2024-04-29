import React from "react";
import Styles from "./Filter.module.css";

function Filter() {
  return (
    <div id={Styles['container']}>
      <section id={Styles['genere']}>
        <h2>Genere</h2>
        <hr/>
        <ul>
          <li>motivational</li>
          <li>love</li>
          <li>friendship</li>
          <li>sad</li>
          <li>happy</li>
        </ul>
      </section>
      <section id={Styles['sort-by']}>
        <h2>Sort-By</h2>
        <hr/>
        <label for="latest"><input type="radio" id={Styles['latest']}/> Latest</label>
        
        <label for="oldest"><input type="radio" id={Styles['oldest']}/> oldest</label>
        
        <label for="most-liked"><input type="radio" id={Styles['most-liked']}/> Most-liked</label>
      </section>
    </div>
  );
}

export default Filter;
