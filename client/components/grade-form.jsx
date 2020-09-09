import React from 'react';
import FormRow from './form-row';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    switch (target.getAttribute('id')) {
      case 'name':
        this.setState({
          name: target.value
        });
        break;
      case 'course':
        this.setState({
          course: target.value
        });
        break;
      case 'grade':
        this.setState({
          grade: target.value
        });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    this.props.postGrade(this.state);
    form.reset();
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleReset(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="col ml-4">
        <h2 className="mb-3">Add Grade</h2>
        <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <FormRow handleChange={this.handleChange} id="name" icon="fa fa-user" placeholder="Name" />
          <FormRow handleChange={this.handleChange} id="course" icon="fa fa-list-alt" placeholder="Course" />
          <FormRow handleChange={this.handleChange} id="grade" icon="fa fa-graduation-cap" placeholder="Grade" />
          <div className="form-group row">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="btn btn-outline-dark ml-2">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
