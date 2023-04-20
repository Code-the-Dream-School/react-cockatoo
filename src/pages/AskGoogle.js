import React from "react";
import { Link } from "react-router-dom";
import style from "../components/TodoListItem.module.css";

function AskGoogle(props) {
  return (
    <div className={style.askGoogle}>
      <h2>Ask Google</h2>
      <button className={style.askGoogle}>
        <Link to="https://www.google.com">Google</Link>
      </button>
    </div>
  );
}

export default AskGoogle;
