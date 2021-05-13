import React from "react";
import { Link } from "react-router-dom";

const Page3 = () => (
  <div>
      <div>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
    </div>
    <label>
      email:
      <input type="text" name="email" />
    </label>
    <div></div>
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
      <Link to="/page2">
        <button>back</button>
      </Link>
    
      <Link to="/page3">
        <button>next</button>
      </Link>
    </div>
  </div>
);

export default Page3;