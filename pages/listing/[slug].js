import Head from "next/head";
import Link from "next/link";
import { Button } from "../../components/button";
import styled from "styled-components";
import { getAllJobs } from "../../lib/webflow";

const PageLayout = styled.div`
  box-sizing: content-box;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  margin: 3rem 0;
  align-self: flex-end;
`;
const JobListing = ({ jobData }) => {
  const { name, company, description, applyLink } = jobData;

  return (
    <PageLayout>
      <ContentWrapper>
        <Head>
          <title>Black Valley | {company} </title>
        </Head>
        <ButtonContainer>
          <Button href={"/"} children={"Back to Job Listings"} />
        </ButtonContainer>
        <div>
          <h1>{name}</h1>
          <h3>{company}</h3>
          <p>{description}</p>
          <Link href={applyLink}>Apply now</Link>
        </div>
      </ContentWrapper>
    </PageLayout>
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
  });
  return {
    props: {
      jobData: mapJobListingKeys(jobListing),
    },
  };
};

export default JobListing;
