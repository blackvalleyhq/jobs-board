import styled from "styled-components";
import JobRow from "./JobRow";
import { neutral } from "../theme/utils";

const ContentWrapper = styled.div``;
const JobListWrapper = styled.ul`
  > * + * {
    margin-top: 0.5rem;
  }
`;

const JobListing = styled.li`
  list-style-type: none;
  border-bottom: 2px solid ${neutral("light")};
`;

const JobsList = ({ listings }) => {
  return (
    <ContentWrapper>
      <JobListWrapper>
        {listings.map((listing) => {
          return (
            <JobListing key={listing.slug}>
              <JobRow listing={listing} />
            </JobListing>
          );
        })}
      </JobListWrapper>
    </ContentWrapper>
  );
};

export default JobsList;
