import styled from 'styled-components';
import Fuse from "fuse.js";
import SearchIcon from "../public/bv-caret-right.svg";
import { fontSize, color } from '../theme/utils'

/* SEARCH BAR */
/* 
  TODO: Add media queries for desktop, tablet, and mobile (dependent on header being completed) 
*/

const Container = styled.div`
  width: 100%;
  max-width: 650px;
  justify-self: flex-end;
`;

const SearchBar = styled.div`
  border-radius: 4px;
  margin: 0 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0px 7px 10px 3px rgba(134, 134, 134, 0.8);
`;

const InputBar = styled.input`
  width: 150px;
  flex-grow: 3;
  display: inline;
  outline: none;
  font-size: ${fontSize("l")};
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0 1rem;
`;
InputBar.displayName = "InputBar";

const SubmitButton = styled.button`
  width: 33px;
  flex-grow: 1;
  background: ${color("primary")};
  border: none;
  outline: none;
  border-radius: 0 8px 8px 0;
`;

/* TODO: Change color property of LABEL and HINTTEXT to ${neutral('white')} */
const Label = styled.label`
  font-size: ${fontSize("xl")};
  margin-left: 1rem;
`;

const HintText = styled.p`
  font-size: ${fontSize("l")};
  margin-left: 1rem;
`;

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
`;

function Search({ allJobs, onComplete }) {
  const fuse = new Fuse(allJobs, {
    keys: ["name", "company"],
    options: {
      findAllMatches: true,
      shouldSort: true,
    },
  });

  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;

    if (!value) return onComplete(allJobs);

    const results = fuse.search(value);
    return onComplete(results.map(({ item }) => item));
  };

  return (
    <Container>
      <Label htmlFor="search-input">
        Find a job
        <HintText>Search for a keyword, company or job title</HintText>
      </Label>
      <SearchBar>
        <InputBar type="text" onChange={handleSearch} id="search-input" />
        <SubmitButton>
          <SearchIcon />
          <OffscreenText>Submit search</OffscreenText>
        </SubmitButton>
      </SearchBar>
    </Container>
  );
}

export default Search
