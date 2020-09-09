import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({
        grades: data
      }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Header />
        <GradeTable grades={this.state.grades} />
      </>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Student Grade Table</h1>
      </header>
    );
  }
}

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.grade.name}</td>
        <td>{this.props.grade.course}</td>
        <td>{this.props.grade.grade}</td>
      </tr>
    );
  }
}

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

export default App;
