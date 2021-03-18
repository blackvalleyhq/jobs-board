import styled from "styled-components";
import { neutral, color, fontSize } from "../theme/utils";

const Row = styled.div`
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

const JobRow = ({listing}) => {
  return (
    <Row>
      <CompanyInitials>AB</CompanyInitials>
      <JobDetail>
        <JobTitle>{listing.name}</JobTitle>
        <CompanyTime>
          <CompanyName>{listing.slug}</CompanyName>
          <span>1 month ago</span>
        </CompanyTime>
      </JobDetail>
    </Row>
  );
};

export default JobRow;
