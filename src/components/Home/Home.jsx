import React from "react";
import Styles from "./Home.module.css";
import SlideShow from "./SlideShow/SlideShow";
function Home() {
  return (
    <div className={Styles["container"]}>
      <section id={Styles["hero"]}>
        <SlideShow />
      </section>

      <hr />

      <section id={Styles["info-1"]}>
        <ul id={Styles["list"]}>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
          <div className={Styles["lines"]}></div>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
          <div className={Styles["lines"]}></div>
          <li className={Styles["items"]}>
            <h3>blasd sd asd sda sd</h3>
            <p>ujbsd dsiouh a ashgd dsadasda sd sdada</p>
          </li>
        </ul>
      </section>

      <hr />

      <section id={Styles["info-2"]}>
        <div className={Styles["img-card"]}>
          <h2>Image</h2>
        </div>
        {/* <div className={Styles["lines"]}></div> */}

        <div className={Styles["para"]}>
          <h2>fjfflkkkfklf.fkfko'k;kf;kfkfkf;k,gjfsflw</h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
