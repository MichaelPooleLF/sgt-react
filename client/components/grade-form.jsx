import React from 'react';

class FormRow extends React.Component {
  render() {
    return (
      <div className="form-group row">
        <label htmlFor={this.props.id} className="sr-only"></label>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text"><i className={this.props.icon} aria-hidden="true"></i></div>
          </div>
          <input onChange={this.props.handleChange} className="col" type="text" name={this.props.id} id={this.props.id} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
}

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
