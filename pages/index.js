import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral } from "../theme/utils";
import { Main, ContentWrapper } from "../styles";
import { Search } from "../components/Search";
import { JobsList } from "../components/JobsList";

const PageHeader = styled.header`
  background-color: ${neutral("dark")};
  color: ${neutral("white")};
  width: 100%;
`;

const SearchWrapper = styled.div`
  margin-bottom: -1.5rem;
`;

const PageBody = styled.div`
  padding-top: 3rem;
  width: 100%;
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
            <JobsList listings={searchResults} />
          </ContentWrapper>
        </PageBody>
      </Main>
    </div>
  );
}

export async function getStaticProps() {
  const allJobs = await getAllJobs();

  return {
    props: {
      allJobs,
    },
    revalidate: 60,
  };
}
