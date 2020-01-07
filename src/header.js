import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
  return (
      <section className="head">
    <div className="container">
     <div className="header">
  <Link to="/" className="logo">CompanyLogo</Link>
  <div className="header-right">
    <Link className="active" href="/">Home</Link>
    <Link to="/">Contact</Link>
    <Link to="/">About</Link>
  </div>
</div>
    </div>
    </section>
  );
  }
}

export default Header;
