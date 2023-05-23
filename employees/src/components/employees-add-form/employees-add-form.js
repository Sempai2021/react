import { Component } from "react";
// import "./employees-add-form.css";
import "./employees-add-form.scss";

class EmployeesAddForm extends Component {
  state = {
    name: "",
    salary: "",
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length && this.state.salary.length) {
      this.props.onAdd(this.state.name, this.state.salary);
      this.setState(({ name, salary }) => ({
        name: "",
        salary: "",
      }));
    }
  };

  static onLog = () => {
    console.log("Hello Artyom, let go learn ENglish");
  };

  static logged = "on";

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            onClick={this.onSubmit}
            type="submit"
            className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

EmployeesAddForm.onLog();
console.log(EmployeesAddForm.logged);

export default EmployeesAddForm;
