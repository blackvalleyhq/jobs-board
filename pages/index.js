import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral, color } from "../theme/utils";
import JobsList from "../components/JobsList";
import Header from '../components/Header'
import Search from '../components/Search'

const Title = styled.h1`
  font-size: ${fontSize("xxl")};
  padding-bottom: 10px;
  color: ${neutral("dark")};
  border-bottom: 8px solid ${neutral("dark")};
`;

export default function Home({ allJobs }) {
  const [searchResults, onComplete] = useState(allJobs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Black Valley | Jobs</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header allJobs={allJobs} onComplete={onComplete}/>
      <Search allJobs={allJobs} onComplete={onComplete}/>
      <main className={styles.main}>
        <JobsList searchResults={searchResults} />
      </main>
    </div>
  );
}




export async function getStaticProps() {
  const allJobs = await getAllJobs();

  return {
    props: {
      allJobs,
    },
  };
}
