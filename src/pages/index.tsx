import { getAllPosts } from '@/libs/api';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <>
      <main></main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allPosts = getAllPosts(['title', 'date']);
  console.log(allPosts);
  return {
    props: {},
  };
};
