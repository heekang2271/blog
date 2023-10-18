import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Container = styled.button`
  font-size: 24px;
`;

const SearchBtn = () => {
  return (
    <Container>
      <IoSearch />
    </Container>
  );
};

export default SearchBtn;
