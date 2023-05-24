import "./charList.scss";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  onCharListLoaded = (charList) => {
    this.setState({ charList, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onLoading = () => {
    this.setState({ loading: true });
  };

  updateChar = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  renderCharList = (charList) => {
    const characters = charList.map((char) => {
      let styleImg = { objectFit: "cover" };
      if (
        char.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        styleImg = { objectFit: "contain" };
      }

      return (
        <li
          onClick={() => this.props.onSelectedChar(char.id)}
          key={char.id}
          className="char__item"
        >
          <img style={styleImg} src={char.thumbnail} alt={char.thumbnail} />
          <div className="char__name">{char.name}</div>
        </li>
      );
    });
    return <ul className="char__grid">{characters}</ul>;
  };

  render() {
    const { charList, loading, error } = this.state;
    const characters = this.renderCharList(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? characters : null;

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
