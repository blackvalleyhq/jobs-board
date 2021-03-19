import styled from "styled-components";
import JobListing from "./JobListing";

const ContentWrapper = styled.div``;
const JobListWrapper = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`;

const JobsList = ({ listings }) => {
  return (
    <ContentWrapper>
      <JobListWrapper>
        {listings.map((listing) => {
          return <JobListing listing={listing} key={listing.slug} />;
        })}
      </JobListWrapper>
    </ContentWrapper>
  );
};

export default JobsList;
