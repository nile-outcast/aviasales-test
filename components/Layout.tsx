//import { GetStaticProps } from 'next';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode
};

const Layout: React.FC<Props> = ({ children }) => {

  return <p>{children}</p>;
};
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await res.json();

  const paths = [
    { params: { id: searchId.searchId } }
  ];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async () => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res1 = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await res1.json();

  const res2 = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`);
  const tickets = await res2.json();
  const name = 'John';

  // Pass post data to the page via props
  return { props: { name } };
};
*/
export default Layout;