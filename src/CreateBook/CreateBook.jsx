import {useMutation} from "react-query";
import {createBook} from "../api";
import {Container} from "../shared/Container";
import {Box} from "rebass/styled-components";
import {Heading} from "rebass";
import {BookForm} from "../shared/BookForm";
import {useNavigate} from "react-router-dom";

export const CreateBook = () => {
  const {mutateAsync, isLoading} = useMutation(createBook);
  const history = useNavigate();
  const onFormSubmit = async (data) => {
    const id = data.title
    await mutateAsync({ ...data, id});
    history('/')
  };
  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Create Book</Heading>
        <BookForm  onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};
