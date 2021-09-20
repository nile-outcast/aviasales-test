import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from "../components/Layout";
import { Ticket } from '../interfaces/Ticket';

type Props = {
  tickets: {
    tickets: Ticket[]
    stop: boolean
  },
};

const TicketList: React.FC<Props> = ({ tickets }) => {

  // const status: boolean = tickets.stop;
  console.log(tickets);

  let status: string = null;

  if (tickets.stop) {
    status = "Yes";
  } else { status = "No"; }

  return (
    <>
      <Layout>Welcome{status}</Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await res.json();

  const paths = [
    { params: { id: searchId.searchId } }
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${params.id}`);
  const tickets = await res.json();

  // Pass post data to the page via props
  return { props: { tickets } };
};

export default TicketList;