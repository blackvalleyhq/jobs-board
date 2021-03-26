import Head from "next/head";
import { Button } from "../../components/button";
import styled from "styled-components";
import { format } from "date-fns";
import { getAllJobs } from "../../lib/webflow";
import { ContentWrapper, Main } from "../../styles";
import { fontSize, typeface } from "../../theme/utils";
import BVCaret from "../../public/bv-caret.svg";

const ListingBody = styled.article`
  position: relative;
`;

const Description = styled.div`
  position: relative;
  max-width: 80ch;
  margin-top: 1.5rem;

  > * + * {
    margin-top: 1.5rem;
  }

  ul,
  ol {
    > li + li {
      margin-top: 0.8rem;
    }
  }
`;

const ListingHead = styled.div``;

const CompanyName = styled.h3`
  font-family: ${typeface("regular")};
  font-size: ${fontSize("l")};
  font-weight: 400;
`;

const ApplyLinkContainer = styled.div`
  position: sticky;
  bottom: 1rem;
  right: 1rem;
  margin-top: 1rem;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`;

const ButtonText = styled.span`
  display: block;
  margin-left: 0.25rem;
`;

const JobListing = ({ jobData }) => {
  const { name, company, description, applyLink, datePosted } = jobData;

  return (
    <Main>
      <Head>
        <title>Black Valley Jobs | {name} </title>
      </Head>
      <ContentWrapper>
        <ListingHead>
          <h1>{name}</h1>
          <CompanyName>{company}</CompanyName>
          <p>{datePosted}</p>
        </ListingHead>
        <ListingBody>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <ApplyLinkContainer>
            <Button href={applyLink}>
              <BVCaret width="24" height="24" />
              <ButtonText>Apply now</ButtonText>
            </Button>
          </ApplyLinkContainer>
        </ListingBody>
      </ContentWrapper>
    </Main>
  );
};

export const getStaticPaths = async () => {
  const allJobs = await getAllJobs();
  const paths = allJobs.map((job) => ({
    params: {
      slug: job.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const jobSlug = params.slug;
  const allJobs = await getAllJobs();
  const jobListing = allJobs.find((job) => job.slug === jobSlug);
  const mapJobListingKeys = (jobListing) => ({
    ...jobListing,
    description: jobListing["job-description"],
    applyLink: jobListing["apply-link"],
    datePosted: format(new Date(jobListing["published-on"]), "do MMMM yyyy"),
  });
  return {
    props: {
      jobData: mapJobListingKeys(jobListing),
    },
  };
};

export default JobListing;
