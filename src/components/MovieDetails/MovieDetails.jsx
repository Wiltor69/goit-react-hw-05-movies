import { useLocation } from 'react-router-dom';
import { Block, Gerns } from './MovieDetails.styled';
import { GoBack } from 'components/GoBack/GoBack';

export const MovieDetails = ({
  movie: { poster_path, title, release_date, overview, vote_average, name },
  genres,
}) => {
  const posterUpl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const goBack = location?.state?.from ?? '/';
  return (
    <>
      <GoBack to={goBack}>Go Back</GoBack>

      <Block>
        <div>
          <img src={posterUpl + poster_path} alt={title} />
        </div>
        <div>
          <h1>{title ?? name}</h1>

          <p>Release date: {release_date}</p>
          <Gerns>
            {genres.map(genre => {
              return <p key={genre.id}>{genre.name}</p>;
            })}
          </Gerns>
          <p>Vote average: {vote_average}</p>
          <p>Overview: {overview}</p>
        </div>
      </Block>
    </>
  );
};
