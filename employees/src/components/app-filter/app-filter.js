import "./app-filter.css";

const AppFilter = (props) => {
  const dataBtns = [
    {
      label: "Все сотрудники",
      name: "all",
    },
    {
      label: "На повышение",
      name: "rise",
    },
    {
      label: "З/П больше 1000$",
      name: "the100more",
    },
  ];

  const btns = dataBtns.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? " btn-outline-light" : " btn btn-light";

    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        data-name={name}
        onClick={(e) => props.onFilterEmp(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{btns}</div>;
};

export default AppFilter;
