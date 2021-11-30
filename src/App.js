import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
