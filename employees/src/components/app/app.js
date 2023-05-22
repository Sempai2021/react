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
          rise: false,
          id: 1,
        },
        {
          name: "Dima S.",
          salary: 1200,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Swetlana V.",
          salary: 2100,
          increase: false,
          rise: false,
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
      rise: false,
      id: ++this.maxId,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, item],
      };
    });
  };

  onToggleProps = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  // onIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  render() {
    const { data } = this.state;
    const employees = this.state.data.length;
    const increaseCount = data.filter((item) => item.increase).length;
    return (
      <div className="app">
        <AppInfo employees={employees} increaseCount={increaseCount} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          onToggleProps={this.onToggleProps}
          onDelete={this.onDelete}
          data={data}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
