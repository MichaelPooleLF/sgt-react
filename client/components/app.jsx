import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  getAverageGrade() {
    let sumGrades = 0;
    const numOfGrades = this.state.grades.length;

    this.state.grades.forEach(element => {
      sumGrades += parseFloat(element.grade);
    });
    const averageGrade = Math.ceil(sumGrades / numOfGrades);
    return averageGrade;
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({
        grades: data
      }))
      .catch(error => console.error(error));
  }

  postGrade(newGrade) {
    const gradesArray = this.state.grades.map(element => ({ ...element }));

    fetch('/api/grades', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => gradesArray.push(data))
      .then(() => this.setState({
        grades: gradesArray
      }))
      .catch(error => console.error(error));
  }

  deleteGrade(event) {
    const gradeID = parseFloat(event.target.getAttribute('id'));
    const gradesArray = this.state.grades.map(element => ({ ...element }));
    gradesArray.forEach((element, index) => {
      if (element.id === gradeID) {
        gradesArray.splice(index, 1);
      }
    });

    fetch(`/api/grades/${gradeID}`, {
      method: 'DELETE'
    })
      .then(() => this.setState({
        grades: gradesArray
      }))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Header averageGrade={this.getAverageGrade()} />
        <div className="row">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
          <GradeForm postGrade={this.postGrade} />
        </div>
      </>
    );
  }
}

export default App;
