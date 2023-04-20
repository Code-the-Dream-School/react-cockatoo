import { useState } from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const Toggle = ({ onSwitch }) => {
  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    onSwitch(newToggle);
  };
  return (
    <div>
      <button
        onClick={switchToggle}
        className={`${style["toggle-button"]} ${
          toggle ? style["dark-theme"] : style["light-theme"]
        }`}
        // className={toggle ? style["dark-theme"] : style["light-theme"]}
      >
        {/* {" "} */}
        {toggle ? "Light mode" : "Dark Mode"}
      </button>
    </div>
  );
  //   return <button onClick={switchToggle}>{children}</button>;
};

Toggle.propTypes = {
  onSwitch: PropTypes.func,
};

export default Toggle;
