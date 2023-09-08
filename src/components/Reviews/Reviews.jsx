import { Item } from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <Item key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </Item>
        );
      })}
    </ul>
  );
};
