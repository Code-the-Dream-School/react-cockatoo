import React from "react";
import PropTypes from "prop-types";

const Greeting = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;
  if (hours < 12) greet = "Good morning!";
  else if (hours >= 12 && hours <= 17) greet = "Good afternoon!";
  else greet = "Good evening!";
  return (
    <div>
      <h3>{greet}</h3>
      {/* <h3>Nice to see you!</h3> */}
    </div>
  );

  //   const [greet, setGreet] = useState(" ")
};

Greeting.propTypes = {
  greet: PropTypes.string,
};

export default Greeting;
