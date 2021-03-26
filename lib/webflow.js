import Webflow from "webflow-api";

export const WebflowClient = new Webflow({
  token: process.env.WEBFLOW_API_TOKEN,
});

export const getAllJobs = async () => {
  const [site] = await WebflowClient.sites();

  const collections = await WebflowClient.collections({
    siteId: site._id,
  });

  const jobCollection = collections.find(({ slug }) => slug === "job-listings");

  const allJobs = await WebflowClient.items({
    collectionId: jobCollection._id,
  });

  /**
   * Serializing the object strips out some unnecessary API functions (update/remove)
   * from the Webflow response. NextJS also doesn't allow returning these functions
   * in `getStaticProps`.
   */
  const serialized = JSON.parse(JSON.stringify(allJobs.items));

  return serialized;
};
