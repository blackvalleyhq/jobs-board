import Link from "next/link";
import { getAllJobs } from "../../lib/webflow";

const JobListing = ({ jobData }) => {
  const { name, company, description, applyLink } = jobData;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{company}</h3>
      <p>{description}</p>
      <Link href={applyLink}>Apply now</Link>
    </div>
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
