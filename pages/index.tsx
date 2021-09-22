import Filter from "../components/Filter";
import TicketSort from '../components/TicketSort';

const Home = (): JSX.Element => {
  /*
    const fetcher = url => fetch(url).then((res) => (res.status == 200) ? res.json() : console.log(res.status + "search"));
    const { data: path } = useSWRImmutable('https://front-test.beta.aviasales.ru/search', fetcher);
  
    const getTic = (url) => {
      return fetch(url)
        .then(res => {
          if (res.status == 404) return;
          if (res.status == 500) {
            console.log(res.status + "getTic");
            new Promise(resolve => setTimeout(resolve, 1000));
            return getTic(url);
          }
          if (res.status != 200) {
            console.log(res.status + "getTic");
            new Promise(resolve => setTimeout(resolve, 1000));
            return getTic(url);
          }
          return res.json();
        })
        .then(json => {
          if (!json.stop) {
            console.log(json.stop);
            return getTic(url);
          }
          console.log(json.tickets);
          return json.tickets;
        });
    };
  
    const { data } = useSWRImmutable(() => 'https://front-test.beta.aviasales.ru/tickets?searchId=' + path.searchId, getTic);
  
    console.log(data + "Успех");
  */

  return <>
    <Filter />
    <TicketSort>
      <div>Loading...</div>
    </TicketSort>
  </>;
};
/*
export const getStaticProps: GetStaticProps = async () => {

  const resId = await fetch('https://front-test.beta.aviasales.ru/search');
  const searchId = await resId.json();

  if (resId.status !== 200) {
    const status = false;
    return { props: { status } };
  }
  /*
    const mass = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.stop) {
          return res.tickets;
        } else {
          return res.stop;
        }
      });
    //const mass = await resBody.json();
    const tickets = mass;
  
    /*
      let status = false;
      let tickets = null;
    
      do {
        const resBody = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`)
          .then((res) => res.json());
        //const mass = await resBody.json();
        status = resBody.stop;
        tickets = resBody.tickets;
      } while (!status);
 const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId.searchId}`;

  //let tickets = null;

  const getTickets = (url) => {
    fetch(url).then(res => {
      if (res.status != 200) {
        console.log(res.status);
        new Promise(resolve => setTimeout(resolve, 1000));
        return getTickets(url);
      }
      return res.json();
    })
      .then(async res => {
        if (!res.stop) {
          console.log(res.stop);
          return await getTickets(url);
        }
        console.log(res.tickets);
        return res.tickets;
      });
  };

  const tickets = await getTickets(url);

  return { props: { tickets } };
};
*/
export default Home;