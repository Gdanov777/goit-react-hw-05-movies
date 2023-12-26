import { CardWrapper, Poster } from './MovieCard.styled';
import { getPoster } from 'api';

export const MovieCard = ({ movies }) => {
  const { poster_path, original_title, vote_average, overview, genres } =
    movies;

  const useCheck = Math.round(vote_average * 10);

  return (
    <>
      <Poster>
        <img src={getPoster(poster_path)} alt="poster" />
      </Poster>
      <CardWrapper>
        <h1>{original_title}</h1>
        <p>User Check: {useCheck}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        {genres
          ? genres.map((genre, index) => <p key={index}>{genre.name}</p>)
          : 'Genres is not available'}
      </CardWrapper>
    </>
  );
};