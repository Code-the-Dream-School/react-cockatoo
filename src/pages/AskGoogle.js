import React from "react";
import { Link } from "react-router-dom";

function AskGoogle(props) {
  return (
    <div>
      <h1>Ask Google</h1>
      <button>
        <Link to="https://www.google.com">Google</Link>
      </button>
    </div>
  );
}

export default AskGoogle;
