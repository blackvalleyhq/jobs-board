import Link from "next/link";
import styled from "styled-components";
import { formatDistance } from "date-fns";
import { neutral, color, fontSize } from "../theme/utils";

const JobList = styled.li`
  list-style-type: none;
  border-bottom: 2px solid ${neutral("light")};
`;

const JobRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.75rem;
`;
const CompanyInitials = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: ${color("primary")};
  border-radius: 50%;
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${neutral("white")};
  font-size: ${fontSize("xl")};
`;

const JobTitle = styled.h3`
  margin-bottom: 0;
`;
const JobDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const CompanyTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CompanyName = styled.p`
  margin-right: 2rem;
  margin-block-start: 0.65em;
  margin-block-end: 0.65em;
`;

const JobListing = ({ listing }) => {
  return (
    <JobList>
      <Link href={`/listing/${listing.slug}`}>
        <JobRow>
          <CompanyInitials>{getFirstLetters(listing.name)}</CompanyInitials>
          <JobDetail>
            <JobTitle>{listing.name}</JobTitle>
            <CompanyTime>
              <CompanyName>{listing.slug}</CompanyName>
              <span>{dateStamp(listing["published-on"])}</span>
            </CompanyTime>
          </JobDetail>
        </JobRow>
      </Link>
    </JobList>
  );
};

export default JobListing;

const getFirstLetters = (companyName) => {
  const initials = companyName.split(" ").map((word) => word[0]);
  const [firstInitial, secondInitial] = initials;

  if (initials.length == 1) {
    return initials.join("").toUpperCase();
  }
  return `${firstInitial}${secondInitial}`.toUpperCase();
};

const dateStamp = (datePosted) => {
  const result = formatDistance(new Date(datePosted), Date.now(), {
    addSuffix: true,
  });
  return result;
};
