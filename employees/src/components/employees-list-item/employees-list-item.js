import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProps,
    increase,
    rise,
    onSalaryChange,
  } = props;

  let clazz = "list-group-item d-flex justify-content-between";
  if (increase) {
    clazz += " increase";
  }

  if (rise) {
    clazz += " like";
  }

  return (
    <li className={clazz}>
      <span
        onClick={onToggleProps}
        data-toggle="rise"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary}
        onChange={onSalaryChange}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={onToggleProps}
          data-toggle="increase"
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
