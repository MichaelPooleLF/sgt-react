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

export default FormRow;
