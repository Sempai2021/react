import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete }) => {
  const employees = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onDelete={() => onDelete(id)}
        key={id}
        {...itemProps}
      />
    );
  });

  return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
