import styled from "styled-components";
import JobListing from "./JobListing";

const JobListWrapper = styled.ul.attrs(() => ({
  role: "list",
}))`
  padding: 0;

  > * + * {
    margin-top: 0.5rem;
  }
`;

export const JobsList = ({ listings }) => {
  return (
    <JobListWrapper>
      {listings.length <= 0
        ? "No jobs found"
        : listings.map((listing) => {
            return <JobListing listing={listing} key={listing.slug} />;
          })}
    </JobListWrapper>
  );
};
