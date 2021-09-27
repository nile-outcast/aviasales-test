import { Ticket } from '../interfaces/Ticket';
import { Data, FilterList, TimeList } from "../interfaces/List";

export function getSortTickets(path: string, tickets: Ticket[]): Ticket[] {
  if (path === 'cheap') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      a.price - b.price);
  }

  if (path === 'fast') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
  }

  if (path === 'optimal') {
    return tickets.sort((a: Ticket, b: Ticket) =>
      (a.price + a.segments[0].duration + a.segments[1].duration) - (b.price + b.segments[0].duration + b.segments[1].duration));
  }
}

export function getUrl(carrier: string): string {
  return 'http://pics.avs.io/99/36/' + carrier + '.png';
}

export function numberToString(num: number): string {
  const str = num.toString();
  if (str.length > 3) {
    return str.slice(0, str.length - 3) + " " + str.slice(str.length - 3, str.length);
  }
  return str;
}

export function updateStateFilter(prev: FilterList, id: string, checked: boolean): FilterList {

  const massFilter = Object.entries(prev);

  if (id == 'allStop' && checked) {
    return massFilter.reduce((obj, [key, value]) => {
      value = true;
      obj[key] = value;
      return obj;
    }, {}) as FilterList;
  }

  if (id == 'allStop' && !checked) {
    return massFilter.reduce((obj, [key, value]) => {
      value = false;
      obj[key] = value;
      return obj;
    }, {}) as FilterList;
  }

  if (id != 'allStop' && prev.allStop) {
    return massFilter.reduce((obj, [key, value]) => {
      if (key == 'allStop') value = false;
      if (key == id) value = checked;
      obj[key] = value;
      return obj;
    }, {}) as FilterList;
  }

  if (id != 'allStop' && !prev.allStop) {
    let count = 0;
    return massFilter.reduce((obj, [key, value]) => {
      if (value) count++;
      if (key == 'allStop' && checked && count == 3) value = true;
      if (key == id) value = checked;
      obj[key] = value;
      return obj;
    }, {}) as FilterList;
  }
}

export function getDepartureTime(date: string): TimeList {
  const departureTime = {
    hour: 0,
    minute: 0,
  };
  const time = new Date(date);
  departureTime.hour = time.getHours();
  departureTime.minute = time.getMinutes();
  return departureTime;
}

export function getTravelTime(duration: number): TimeList {
  const travelTime = {
    day: 0,
    hour: 0,
    minute: 0,
  };

  if (duration > 1440) {
    travelTime.day = Math.floor(duration / 1440);
    travelTime.hour = Math.floor((duration - 1440) / 60);
  } else {
    travelTime.hour = Math.floor(duration / 60);
  }
  travelTime.minute = duration % 60;

  return travelTime;
}

export function getArrivalTime(departureTime: TimeList, travelTime: TimeList): TimeList {
  const arrivalTime = {
    hour: 0,
    minute: 0,
  };

  if (departureTime.minute + travelTime.minute > 60) {
    arrivalTime.minute = departureTime.minute + travelTime.minute - 60;
    arrivalTime.hour += 1;
  } else {
    arrivalTime.minute = departureTime.minute + travelTime.minute;
  }

  if (arrivalTime.hour + departureTime.hour + travelTime.hour > 24) {
    arrivalTime.hour += departureTime.hour + travelTime.hour - 24;
  } else {
    arrivalTime.hour += departureTime.hour + travelTime.hour;
  }

  return arrivalTime;
}

type Path = {
  searchId: string
};

export async function getTickets(
  setData: (arg0: {
    (prev: Data): Data;
    (prev: Data): Data;
    (prev: Data): Data;
  }) => void
): Promise<void> {

  const resPath = await fetch('https://front-test.beta.aviasales.ru/search');
  const path = await resPath.json();

  const getData = async (path: Path) => {
    try {
      const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${path.searchId}`);

      if (!res.ok) {
        setData((prev: Data) => ({
          tickets: prev.tickets,
          isLoading: true,
        }));
        await getData(path);
      }

      const data = await res.json();

      if (data.stop) {
        setData((prev: Data) => ({
          tickets: prev.tickets.concat(data.tickets),
          isLoading: false,
        }));
      } else {
        setData((prev: Data) => ({
          tickets: prev.tickets.concat(data.tickets),
          isLoading: true,
        }));
        await getData(path);
      }
    } catch (err) {
      console.log('Поймал!' + err);
    }
  };

  await getData(path);
}