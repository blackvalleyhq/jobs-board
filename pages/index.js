import Head from "next/head";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral } from "../theme/utils";

const Title = styled.h1`
  font-size: ${fontSize("xxl")};
  padding-bottom: 10px;
  color: ${neutral("dark")};
  border-bottom: 8px solid ${neutral("dark")};
`;

export default function Home({ allJobs }) {
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

      <main className={styles.main}>
        <Title>Black Valley Jobs</Title>

        <ul>
          {allJobs.map((job) => (
            <li key={job.slug}>
              <a href="#">
                <div>
                  <h3>{job.name}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
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
