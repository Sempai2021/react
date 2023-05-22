import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }

  increase = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  like = () => {
    console.log("kike");
    this.setState(({ like }) => ({
      like: !like,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, like } = this.state;

    let clazz = "list-group-item d-flex justify-content-between";
    if (increase) {
      clazz += " increase";
    }

    if (like) {
      clazz += " like";
    }

    return (
      <li className={clazz}>
        <span onClick={this.like} className="list-group-item-label">
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            onClick={this.increase}
            type="button"
            className="btn-cookie btn-sm "
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            onClick={onDelete}
            type="button"
            className="btn-trash btn-sm "
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
