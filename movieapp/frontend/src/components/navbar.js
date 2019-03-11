import React, { Component } from "react";
import { Link} from "react-router-dom";


class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <>
    <nav>
    <Link to="/dashboard"><img src="https://img.icons8.com/dotty/40/000000/tumblr.png" alt="favicon here"/></Link>

    </nav>
    </>;
  }
}

export default Navbar;
