// import { Component } from "react";
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

function WhoAmi({ name, surname }) {
  return (
    <div>
      <h1>
        Ma name is {name()}, surname - {surname}
      </h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmi
        name={() => {
          return "Artoym";
        }}
        surname="Shulyak"
      />
      <WhoAmi
        name={() => {
          return "Dima";
        }}
        surname="Shulyak"
      />
    </div>
  );
}

export default App;
