import { format, formatDistance } from "date-fns";

export const dateStamp = (datePosted) => {
  const today = format(new Date(), "yyyy,M,d");
  const postDate = new Date(datePosted);
  const formatDatePosted = format(postDate, "yyyy,M,d");

  const result = formatDistance(new Date(formatDatePosted), new Date(today), {
    addSuffix: true,
  });
  return result;
};
