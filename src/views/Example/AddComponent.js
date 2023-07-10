import React from "react";
import "./MyComponent.scss";

class AddComponent extends React.Component {
  state = {
    name: "",
    salary: "",
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSalaryChange = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.salary) {
      alert("Missing required parameters");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      name: this.state.name,
      salary: this.state.salary,
    });
    this.setState({
      name: "",
      salary: "",
    });
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name" className="form-text">
              Name:{" "}
            </label>
            <br />
            <div className="form-control">
              <input
                type="text"
                value={this.state.name}
                onChange={(event) => this.handleNameChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="salary" className="form-text">
              Salary:
            </label>
            <br />
            <div className="form-control">
              <input
                type="text"
                value={this.state.salary}
                onChange={(event) => this.handleSalaryChange(event)}
              />
            </div>
          </div>
          <input
            type="Submit"
            className="btn btn-submit"
            onClick={(event) => {
              this.handleSubmit(event);
            }}
          />
        </form>
      </div>
    );
  }
}
export default AddComponent;
