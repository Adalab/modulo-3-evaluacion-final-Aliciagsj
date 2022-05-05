import "../styles/MovieSceneList.scss";
import MovieSceneItem from "./MovieSceneItem";

const MovieSceneList = (props) => {
  const { moviesList } = props;
  const { movie } = props;
  const { year } = props;

  const renderList = moviesList.map((movieItem, index) => {
    return (
      <MovieSceneItem className="movies__list" key={index} movie={movieItem} />
    );
  });

  return renderList.length === 0 ? (
    <div>
      WOW!!!! no encuentro la pelicula: {movie} en el año {year}
    </div>
  ) : (
    <ul className="list">{renderList}</ul>
  );
};

export default MovieSceneList;
