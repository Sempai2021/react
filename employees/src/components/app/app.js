import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Artoym S.",
          salary: 800,
          increase: false,
          id: 1,
        },
        {
          name: "Dima S.",
          salary: 1200,
          increase: true,
          id: 2,
        },
        {
          name: "Swetlana V.",
          salary: 2100,
          increase: false,
          id: 3,
        },
      ],
    };
    this.maxId = 3;
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onAdd = (name, salary) => {
    const item = {
      name,
      salary,
      increase: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, item],
      };
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList onDelete={this.onDelete} data={data} />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
