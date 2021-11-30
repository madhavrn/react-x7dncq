import React from 'react';
import './style.css';
import './WriteFile.js';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form onSubmit="WriteToFile(this)">
        <label>
          First Name:
          <input type="text" name="FirstName" />
          <br /> <br />
          Last Name:
          <input type="text" name="lastName" />
          <br /> <br />
          UserID:
          <input type="text" name="userid" />
          <br /> <br />
          Password:
          <input type="text" name="password" />
          <br /> <br />
          Email:
          <input type="text" name="emailaddress" />
          <br /> <br />
          Phone:
          <input type="text" name="phone" />
          <br /> <br />
          Address:
          <input type="text" name="address" />
          <br /> <br />
          Date of Birth:
          <input type="text" name="date_of_birth" />
          <br /> <br />
          Country of Interest:
          <input type="text" name="country" />
        </label>
        <br /> <br />
        <input type="submit" value="Submit" />
        <br /> <br />
      </form>
    </div>
  );
}
