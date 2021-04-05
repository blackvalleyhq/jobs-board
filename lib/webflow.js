import Webflow from "webflow-api";

export const WebflowClient = new Webflow({
  token: process.env.WEBFLOW_API_TOKEN,
});

export const getAllJobs = async () => {
  const [site] = await WebflowClient.sites();

  const collections = await WebflowClient.collections({
    siteId: site._id,
  });

  const { _id: jobCollectionId } = collections.find(
    ({ slug }) => slug === "job-listings"
  );

  const jobCollection = await WebflowClient.collection({
    collectionId: jobCollectionId,
  });

  const [typeOfContractOptions, jobCategoryOptions] = jobCollection.fields
    .filter(field => field.validations?.options)
    .map(obj => obj.validations.options)

  const dropdownValues = {
    "type-of-contract": typeOfContractOptions,
    "job-category": jobCategoryOptions,
  };

  const allJobs = await WebflowClient.items({
    collectionId: jobCollection._id, 
  })

  allJobs.items.forEach(jobListing => {
    jobListing.pills = []
    for(const value in dropdownValues) {
      const { name: text } = dropdownValues[value].find(el => el.id === jobListing[value])
      jobListing.pills.push(text)
    } 
  })

  /**
   * Serializing the object strips out some unnecessary API functions (update/remove)
   * from the Webflow response. NextJS also doesn't allow returning these functions
   * in `getStaticProps`.
   */
  const serialized = JSON.parse(JSON.stringify(allJobs.items));

  return serialized;
};