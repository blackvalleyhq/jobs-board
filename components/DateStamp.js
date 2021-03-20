import { format, formatDistance } from "date-fns";

const DateStamp = ({ datePosted = "2021, 0, 19" }) => {
  const todaysDate = new Date();
  const formattedDate = format(todaysDate, "yyyy, M, d");
  const distanceInWords = formatDistance(datePosted, formattedDate);

  return distanceInWords;
};
console.log(DateStamp(2021, 0, 19));

export default DateStamp;
