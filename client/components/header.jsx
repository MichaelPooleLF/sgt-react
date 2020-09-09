import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row justify-content-between">
        <h1 className="col">Student Grade Table</h1>
        <h2 className="col text-right">Average Grade: <span className="badge badge-success">{this.props.averageGrade}</span></h2>
      </header>
    );
  }
}

export default Header;
