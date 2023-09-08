import { List } from './Casts.styled';

export const Casts = ({ cast }) => {
  const posterUpl = 'https://image.tmdb.org/t/p/w300';
  return (
    <List>
      {cast.map(({ credit_id, profile_path, name }) => {
        return (
          <li key={credit_id}>
            <img src={posterUpl + profile_path} alt={name} />
            <p>{name}</p>
          </li>
        );
      })}
    </List>
  );
};
