import { Header } from "components/Header/Header";
import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Main = styled.main`
  width: 100%;
  padding: 10px;
  overflow: hidden;
`;

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
