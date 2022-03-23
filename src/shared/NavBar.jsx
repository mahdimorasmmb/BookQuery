import { Flex, Box, Link as StyledLink, Image } from "rebass/styled-components";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import logo from "./logo.svg"

export const NavBar = () => {
  return (
    <Flex bg="black" color="white" justifyContent="center">
      <Container>
        <Flex px={2} width="100%" alignItems="center">
          <Image size={20} src={logo}/>
          <Link to="/">
            <StyledLink variant="nav">React Query CRUD</StyledLink>
          </Link>
          <Box mx="auto" />
          <Link to="/create-book">
            <StyledLink variant="nav">+ Add new book</StyledLink>
          </Link>
        </Flex>
      </Container>
    </Flex>
  );
};
