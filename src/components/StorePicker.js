// 'npm start' 
// place the nested html in parenthesis to have a clean indent but not to automate an insection of a semicolon when leaving return on its own

// You can't return sibling elements therefore if you have more than one element wrap them in a <React.fragment></React.fragment> or empty tag <></>tag

// Comments are set { /* This is JSX code */}
import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    //console.log(this.myInput.current.value);

    // 3. Change the page to /store/whatever-they-entered
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`); 
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;