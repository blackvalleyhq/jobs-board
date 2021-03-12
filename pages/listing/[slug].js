import { getAllJobs } from "../../lib/webflow";

const JobListing = ({ jobData }) => {
  console.log(jobData);
  const { name, company } = jobData;
  return (
    <div>
      <h1>{name}</h1>
      <h3>{company}</h3>
      <p>{jobData["job-description"]}</p>
      <a href={jobData["apply-link"]} target="_blank">
        Apply now
      </a>
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
  const jobList = allJobs.filter((job) => job.slug === jobSlug);

  return {
    props: {
      jobData: jobList[0],
    },
  };
};

export default JobListing;
