import { Component } from "react";
import "./App.css";

const Header = () => {
  return <h2>Hello World, Artoym!</h2>;
};

// const Field = () => {
//   const holder = "Enter here elem";
//   const styledField = {
//     width: "300px",
//     background: "#ccc",
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

class Field extends Component {
  render() {
    const holder = "Enter here CLASS";
    const styledField = {
      width: "300px",
      background: "#ccc",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = "Send";

  const logged = true;

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
