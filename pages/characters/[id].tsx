import { API } from "assets/api/api";
import { CharacterType } from "assets/api/rick-and-morty-api";
import { CharacterCard } from "components/Card/CharacterCard/CharacterCard";
import { getLayout } from "components/Layout/Layout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters();

  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }));

  return {
    paths,
    fallback: "blocking", // или true, если нужно использовать fallback страницы
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {};

  const character = await API.rickAndMorty.getCharacter(id as string);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
};

type PropsType = {
  character: CharacterType;
};

const Character = ({ character }: PropsType) => {
  const router = useRouter();

  if (router.isFallback) return <div>... Loading</div>;
  const characterId = router.query.id;

  const goToCharacters = () => router.push(`/characters`);

  return (
    <PageWrapper>
      <Container>
        <IdText>{`CHARACTER ID: ${characterId}`}</IdText>
        <CharacterCard character={character} />
        <Button onClick={goToCharacters}>GO TO CHARACTERS PAGE</Button>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

const IdText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 20px;
  min-width: 330px;
  min-height: 60px;
  border-radius: 5px;
  border: none;
  background: #3378f4;

  &:hover {
    background: #3378f4;
    color: #fff;
    cursor: pointer;
  }
`;

Character.getLayout = getLayout;
export default Character;
