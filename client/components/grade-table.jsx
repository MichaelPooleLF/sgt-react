import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    const tableData = this.props.grades.map(element => {
      return <Grade key={element.id} grade={element} />;
    });
    return (
      <table className="table table-striped">
        <thead className="thead-light">
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
