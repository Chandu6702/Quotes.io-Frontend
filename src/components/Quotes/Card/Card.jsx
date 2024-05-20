import React, { useState } from "react";
import Styles from "./Card.module.css";
import { FaRegComment } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import { FcLike } from "react-icons/fc";

function Card({ text }) {
  return (
    <div className={Styles["container"]}>

      <p className={Styles["quote"]}>{text}</p>

      <div className={Styles["wrapper"]}>

        <div className={Styles["icons"]}>
          <div className={Styles['like']}>
            <FcLike size={30} color="rgba(255, 255, 255, 0.581)" />
            143
          </div>
          <div className={Styles['comment']}>
            <FaRegComment size={30} color="rgba(255, 255, 255, 0.581)" />
            143
          </div>
          <div className={Styles['share']}>
            <IoIosShareAlt size={30} color="rgba(255, 255, 255, 0.581)" />
          </div>
        </div>

        <div>
          <p className={Styles["author"]}>@monkeydfgfdfgdfdluffy</p>
        </div>

      </div>

    </div>
  );
}

export default Card;
