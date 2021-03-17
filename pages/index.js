import Head from "next/head";
import { useState } from 'react'
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { getAllJobs } from "../lib/webflow";
import { fontSize, neutral, color } from "../theme/utils";
import Fuse from 'fuse.js';
import SearchIcon from '../public/bv-caret-right.svg'

const Title = styled.h1`
  font-size: ${fontSize("xxl")};
  padding-bottom: 10px;
  color: ${neutral("dark")};
  border-bottom: 8px solid ${neutral("dark")};
`

export default function Home({ allJobs }) {
  const [searchResults, onComplete] = useState(allJobs)
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

        <Search allJobs={allJobs} onComplete={onComplete}/>

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
/* 
  TODO: Add media queries for desktop, tablet, and mobile (dependent on header being completed) 
*/
const SearchContainer = styled.div`
  border-radius: 4px;
  margin: 0 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0px 7px 10px 3px rgba(134,134,134,0.80);
`


const InputBar = styled.input`
  width: 150px;
  flex-grow: 3;
  display: inline;
  outline: none;
  font-size: ${fontSize("l")};
  border: none;
  border-radius: 8px;
  padding: 0 1rem;`
InputBar.displayName = 'InputBar'

const SubmitButton = styled.button`
  width: 33px;
  flex-grow: 1;
  background: ${color('primary')};
  border: none;
  outline: none;
  border-radius: 0 8px 8px 0;
`

/* TODO: Change color property of LABEL and HINTEXT to ${neutral('white')} */
const Label = styled.label`
  font-size: ${fontSize("xl")};
  color: ${color('neutral')};
`

const HintText = styled.p`
  font-size: ${fontSize("l")};
  color: ${color('neutral')};
`

const OffscreenText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`



function Search({ allJobs, onComplete }) {
  const fuse = new Fuse(allJobs, { 
    keys: ['name', 'company'], 
    options: {
      findAllMatches: true, 
      shouldSort: true,
    }
  })

  const handleSearch = (e) => {
    const {target: {value}} = e

    if (!value) return onComplete(allJobs)

    const results = fuse.search(value)
    return onComplete(results.map(({item}) => item))
  }

  return (
    <>
      <Label htmlFor="search-input">Find a job
        <HintText>Search for a keyword, company or job title</HintText>
      </Label>
      <SearchContainer>
        <InputBar type="text" onChange={handleSearch} id="search-input"/>
        <SubmitButton>
          <SearchIcon />
          <OffscreenText>Submit search</OffscreenText>
        </SubmitButton>
      </SearchContainer>
    </>
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
