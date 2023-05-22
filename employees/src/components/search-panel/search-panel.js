import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  updateSearchEmp = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.updateSearchEmp(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={this.state.term}
        onChange={this.updateSearchEmp}
      />
    );
  }
}

export default SearchPanel;
