import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => (
  <div>
    <div>
      <label>
        Password:
        <input type="password" name="name" />
      </label>
    </div>
    <label>
      Phone Number:
      <input type="number" name="email" />
    </label>
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
    
      <Link to="/page3">
        <button>next</button>
      </Link>
    </div>
  </div>
);

export default Page2;
