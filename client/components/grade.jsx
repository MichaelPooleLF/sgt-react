import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
        <td><button type="button" className="btn btn-danger" id={this.props.grade.id} onClick={this.props.deleteGrade}>Delete</button></td>
      </tr>
    );
  }
}

export default Grade;
