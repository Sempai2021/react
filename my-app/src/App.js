import { Component } from "react";
import "./App.css";

// const Header = () => {
//   return <h2>Hello World, Artoym!</h2>;
// };

// const Field = () => {
//   const holder = "Enter here elem";
//   const styledField = {
//     width: "300px",
//     background: "#ccc",
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

// class Field extends Component {
//   render() {
//     const holder = "Enter here CLASS";
//     const styledField = {
//       width: "300px",
//       background: "#ccc",
//     };
//     return <input placeholder={holder} type="text" style={styledField} />;
//   }
// }

// function Btn() {
//   const text = "Send";

//   const logged = true;

//   return <button>{logged ? "Enter" : text}</button>;
// }

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    };
  }

  nextYear = () => {
    console.log("+++");
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  commitInputChanges = (e, color) => {
    this.setState({ position: e.target.value });
    console.log(color);
  };

  render() {
    const { name, surname } = this.props;
    const { years, text, position } = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
        <h1>
          Ma name is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </h1>
        <form>
          <span>Enter:</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, "some color")}
          />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmi name="Artoym" surname="Shulyak" />
      <WhoAmi name="Dima" surname="Shulyak" />
    </div>
  );
}

export default App;
