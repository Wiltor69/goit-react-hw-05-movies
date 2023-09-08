import { Link } from 'react-router-dom';
import { List, Item } from './HomeList.styled';

export const HomeList = ({ items, state }) => {
  return (
    <List>
      {items.map(({ id, original_title }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={state}>
              {original_title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};
