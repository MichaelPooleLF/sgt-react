import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    if (this.props.grades.length === 0) {
      return (
        <p>No grades recorded</p>
      );
    }

    const tableData = this.props.grades.map(element => {
      return <Grade key={element.id} grade={element} />;
    });

    return (
      <table className="table table-striped col-8">
        <thead className="thead-light">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
