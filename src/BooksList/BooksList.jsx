import { useQuery } from "react-query";
import { getAllBooks } from "../api";
import { Container } from "../shared/Container";
import { Flex } from "rebass/styled-components";
import { ThreeDots } from "react-loader-spinner";
import BookItem from "./BookItem";
export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <ThreeDots color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if(isError){
    return <span>Error:{error.message}</span>
  }


  return(
    <Container>
      <Flex flexDirection='column' alignItems="center">
        {
          data.map(({author, title,id})=>(
            <BookItem key={id} title={title} author={author} id={id}/>
          ))
        }

      </Flex>
    </Container>
  )
};
