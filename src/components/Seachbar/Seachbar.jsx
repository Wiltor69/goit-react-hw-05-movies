import { Block, Form, Forminput, Button } from './Seachbar.styled';

export const Searchbar = ({ onSubmit, input, onChange }) => {
  return (
    <Block>
      <Form action="" onSubmit={onSubmit}>
        <Forminput
          type="text"
          placeholder="Search movie"
          name="seachImg"
          onChange={onChange}
          value={input}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Block>
  );
};
