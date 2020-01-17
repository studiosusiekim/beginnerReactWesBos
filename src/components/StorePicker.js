// 'npm start' 
// place the nested html in parenthesis to have a clean indent but not to automate an insection of a semicolon when leaving return on its own

// You can't return sibling elements therefore if you have more than one element wrap them in a <React.fragment></React.fragment> or empty tag <></>tag

// Comments are set { /* This is JSX code */}
import React from "react";
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;