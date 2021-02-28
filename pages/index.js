import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Black Valley Jobs</h1>

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
