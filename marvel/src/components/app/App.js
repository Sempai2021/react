import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";
import { Component } from "react";

class App extends Component {
  state = {
    selectedChar: null,
  };

  onSelectedChar = (id) => {
    this.setState({ selectedChar: id });
  };

  render() {
    const { selectedChar } = this.state;

    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <RandomChar />
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharList onSelectedChar={this.onSelectedChar} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={selectedChar} />
            </ErrorBoundary>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
