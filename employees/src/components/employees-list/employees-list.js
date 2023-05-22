import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProps, onSalaryChange }) => {
  const employees = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        onSalaryChange={(e) => onSalaryChange(id, e.target.value)}
        onToggleProps={(e) =>
          onToggleProps(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onDelete={() => onDelete(id)}
        key={id}
        {...itemProps}
      />
    );
  });

  return <ul className="app-list list-group">{employees}</ul>;
};

export default EmployeesList;
