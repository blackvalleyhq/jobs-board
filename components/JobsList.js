import styled from "styled-components";
import JobListing from "./JobListing";
import { fontSize, typeface } from "../theme/utils";

const JobListWrapper = styled.ul.attrs(() => ({
  role: "list",
}))`
  padding: 0;
  > * + * {
    margin-top: 0.5rem;
  }
`;

const EmptyState = styled.h3`
  text-align: center;
  font-size: ${fontSize("xl")};
`;

const EmptyHelper = styled.span`
  display: block;
  font-size: ${fontSize("m")};
  font-family: ${typeface("regular")};
  font-weight: 400;
`;

export const JobsList = ({ listings }) => {
  if (listings.length <= 0) {
    return (
      <EmptyState>
        Sorry,
        <EmptyHelper>
          We don't have any listings like that right now
        </EmptyHelper>
      </EmptyState>
    );
  }
  return (
    <JobListWrapper>
      {listings.map((listing) => {
        return <JobListing listing={listing} key={listing.slug} />;
      })}
    </JobListWrapper>
  );
};
