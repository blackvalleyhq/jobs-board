import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";

const Title = styled.h1`
  font-size: 58px;
  padding-bottom: 10px;
  border-bottom: 8px solid black;
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

        <div>
          {allJobs.map((job) => (
            <Link href={`/listing/${job.slug}`} key={job.slug}>
              <a>
                <div>
                <h3>{job.name}</h3>
                </div>
              </a>
            </Link>
          ))}
        </div>
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
