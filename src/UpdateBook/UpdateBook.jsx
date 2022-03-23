import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { Container } from "../shared/Container";
import { Flex, Box } from "rebass/styled-components";
import { ThreeDots } from "react-loader-spinner";
import { getBook } from "../api";
import { Heading } from "rebass";
import {BookForm} from "../shared/BookForm";
import {updateBook} from "../api";

export const UpdateBook = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { data, error, isLoading, isError } = useQuery(
    ["book", { id }],
    getBook
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);
  console.log(data)
  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    history('/')
  };

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <ThreeDots color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error:{error}
        </Flex>
      </Container>
    );
  }


  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm defaultValues={data} onFormSubmit={onFormSubmit} isLoading={isMutating} />
      </Box>
    </Container>
  );
};
