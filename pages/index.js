import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral } from "../theme/utils";
import { Main, ContentWrapper } from "../styles";
import { Search } from "../components/Search";

const PageHeader = styled.header`
  background-color: ${neutral("dark")};
  color: ${neutral("white")};
  width: 100%;
`;

const SearchWrapper = styled.div`
  margin-bottom: -1.5rem;
`;

const PageBody = styled.div`
  padding-top: 1.5rem;
`;

const Title = styled.h1`
  font-size: ${fontSize("xxl")};
  text-align: center;
`;

export default function Home({ allJobs }) {
  const [searchResults, onComplete] = useState(allJobs);
  return (
    <div>
      <Head>
        <title>Black Valley | Jobs</title>
      </Head>

      <Main>
        <PageHeader>
          <ContentWrapper>
            <Title>Jobs</Title>
            <SearchWrapper>
              <Search allJobs={allJobs} onComplete={onComplete} />
            </SearchWrapper>
          </ContentWrapper>
        </PageHeader>
        <PageBody>
          <ContentWrapper>
            <ul>
              {searchResults.length <= 0
                ? "No jobs found"
                : searchResults.map((job) => (
                    <li key={job.slug}>
                      <a href="#">
                        <div>
                          <h3>{job.name}</h3>
                        </div>
                      </a>
                    </li>
                  ))}
            </ul>
          </ContentWrapper>
        </PageBody>
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  const allJobs = await getAllJobs();

  console.log(allJobs);

  return {
    props: {
      allJobs,
    },
  };
}
