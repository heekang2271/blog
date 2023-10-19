import styled from 'styled-components';

import { wrapStyle } from '@/styles';

const Container = styled.div`
  ${wrapStyle};
  padding-top: 20px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Page = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Page;
