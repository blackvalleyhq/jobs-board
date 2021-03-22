import styled from "styled-components";
import JobListing from "./JobListing";
// import DateStamp from "./DateStamp.js";
const ContentWrapper = styled.div``;
const JobListWrapper = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`;

const JobsList = ({ searchResults }) => {
  return (
    <ContentWrapper>
      <JobListWrapper>
        {searchResults.length <= 0
          ? "No jobs found"
          : searchResults.map((listing) => {
              return <JobListing listing={listing} key={listing.slug} />;
            })}
      </JobListWrapper>
    </ContentWrapper>
  );
};

export default JobsList;
