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
    };
  }

  nextYear = () => {
    console.log("+++");
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          Ma name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
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
