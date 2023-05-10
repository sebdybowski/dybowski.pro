import { useEffect, useState } from 'preact/hooks';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 30.237;
const year = day * 365.25;

const getDisplayValues = (diff: number) => {
  const years = Math.floor(diff / year);
  const months = Math.floor((diff % year) / month);
  const days = Math.floor((diff % year % month) / day);
  const hours = Math.floor((diff % year % month % day) / hour);
  const minutes = Math.floor((diff % year % month % day % hour) / minute);
  const seconds = Math.floor((diff % year % month % day % hour % minute) / second);

  return [years, months, days, hours, minutes, seconds];
};

const useCounter = (startDate: string) => {
  const startDateTime = new Date(startDate).getTime();

  const [diff, setDiff] = useState(
    new Date().getTime() - startDateTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDiff(new Date().getTime() - startDateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startDateTime]);

  return getDisplayValues(diff);
};

export const Counter = () => {
  const [
    years, months, days, hours, minutes, seconds
  ] = useCounter('1 June 2013');
  
  return (
    <span>
      {years}y {months}m {days}d {hours}h {minutes}m {seconds}s
    </span>
  );
};
