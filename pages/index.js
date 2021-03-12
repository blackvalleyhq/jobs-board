import Head from "next/head";
import { useState } from 'react'
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral } from "../theme/utils";
import Fuse from 'fuse.js';
import SearchIcon from '../public/bv-caret-right.svg'

const Title = styled.h1`
  font-size: ${fontSize("xxl")};
  padding-bottom: 10px;
  color: ${neutral("dark")};
  border-bottom: 8px solid ${neutral("dark")};
`

export default function Home({ allJobs }) {
  const [searchResults, setSearchResults] = useState(allJobs)
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

        <Search allJobs={allJobs} setSearchResults={setSearchResults}/>

        <ul>
          {
          searchResults.length <= 0 ? 'No jobs found' : 
          searchResults.map((job) => (
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

/* SEARCH BAR */
const SearchContainer = styled.div`
  border-radius: 4px;
  margin: 0 1rem;
  border: 1px solid black;
  border-radius: 6px;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`
SearchContainer.displayName = 'SearchContainer'

const InputBar = styled.input`
  width: 80%;
  display: inline;
  outline: none;
  font-size: 1.6rem;`
InputBar.displayName = 'InputBar'

const SubmitButton = styled.button`
  width: 20%;
  background: #80E0BE;
  border: none;
  outline: none;`
SubmitButton.displayName = 'SubmitButton'

function Search({ allJobs, setSearchResults }) {
  const [searchText, setSearchText] = useState('')

  const fuse = new Fuse(allJobs, {
    keys: ['name']
  })

  const handleSearch = (e) => {
    setSearchText(e.target.value)
    const searchResults = fuse.search(searchText)

    const newSearchResults = searchResults.length > 0 ? searchResults : allJobs
    const names = newSearchResults.map(el => el?.item?.name || el)

    setSearchResults(allJobs.filter( job => names.includes(job.name)))
    console.log(names)
    
  }

  return (
    <SearchContainer>
      <InputBar type="text" onChange={handleSearch}/>
      <SubmitButton>
      <SearchIcon />
      </SubmitButton>
    </SearchContainer>
  )
}

export async function getStaticProps() {
  const allJobs = await getAllJobs();

  return {
    props: {
      allJobs,
    },
  };
}
