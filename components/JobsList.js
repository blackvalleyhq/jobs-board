import styled from "styled-components";
import { neutral, color, fontSize } from "../theme/utils";

const ContentWrapper = styled.div``;
const JobListWrapper = styled.ul``;

const JobListing = styled.li`
  list-style-type: none;
  border-bottom: 2px solid ${neutral("light")};
  margin-bottom: 1rem;
`;
const JobRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
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
const CompanyName = styled.p`
  margin-top: 0.5rem;
`;

const JobsList = ({ listings }) => {
  return (
    <ContentWrapper>
      <JobListWrapper>
        {listings.map((listing) => {
          return (
            <JobListing key={listing.slug}>
              <JobRow>
                <CompanyInitials>AB</CompanyInitials>
                <div>
                  <JobTitle>{listing.name}</JobTitle>
                  <CompanyName>{listing.slug}</CompanyName>
                </div>
              </JobRow>
            </JobListing>
          );
        })}
      </JobListWrapper>
    </ContentWrapper>
  );
};

export default JobsList;
